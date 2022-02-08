import React, {
  ReactElement,
  Ref,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Alert,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  ScrollViewProps,
} from 'react-native';
import {Day} from '../Day';
import {DaysScroll} from './styles';

interface HomeDaysScrollProps {
  selectedMonth: number;
  selectedDay: number;
  changeSelectedDay: (day: number) => void;
  dailyProgress: string[];
  workoutDays: [];
}

const widthScreen = Math.round(Dimensions.get('window').width);
const dayButtonWidth = Math.round(widthScreen / 9);
const offsetWidth = Math.round((widthScreen - dayButtonWidth) / 2);

export function HomeDaysScroll({
  selectedDay,
  changeSelectedDay,
  workoutDays,
  dailyProgress,
  selectedMonth,
}: HomeDaysScrollProps) {
  const dayRef = useRef();
  const [chosenDay, setChosenDay] = useState(selectedDay);

  let days = [];
  let daysInMonth: any = new Date(
    new Date().getFullYear(),
    selectedMonth + 1,
    0,
  ).getDate();
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  useEffect(() => {
    changeSelectedDay(chosenDay);
  }, [chosenDay]);

  useEffect(() => {
    setTimeout(() => {
      if (selectedMonth == new Date().getMonth()) {
        scrollToDay(new Date().getDate());
        setChosenDay(new Date().getDate());
      } else {
        scrollToDay(1);
        setChosenDay(1);
      }
    }, 10);
  }, [selectedMonth]);

  function handleScrollEnd(event: NativeSyntheticEvent<NativeScrollEvent>) {
    let posX = event.nativeEvent.contentOffset.x;
    let targetDay = Math.round(posX / dayButtonWidth) + 1;
    setChosenDay(targetDay);
  }

  function scrollToDay(day: number) {
    const posX = (day - 1) * dayButtonWidth;
    if (dayRef.current) {
      //@ts-ignore
      dayRef.current.scrollTo({x: posX, y: 0, animated: true});
    }
  }

  return (
    <DaysScroll
      //@ts-ignore
      ref={dayRef}
      horizontal={true}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      snapToInterval={dayButtonWidth}
      contentContainerStyle={{
        paddingLeft: offsetWidth,
        paddingRight: offsetWidth,
      }}
      onMomentumScrollEnd={handleScrollEnd}>
      {days.map((day, index) => (
        <Day
          key={index}
          day={day}
          month={selectedMonth}
          dailyProgress={dailyProgress}
          workoutDays={workoutDays}
          width={dayButtonWidth}
          onClickedDay={() => {
            scrollToDay(day);
            setChosenDay(day);
          }}
        />
      ))}
    </DaysScroll>
  );
}
