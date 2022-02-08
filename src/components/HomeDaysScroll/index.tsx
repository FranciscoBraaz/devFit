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
import {DaysScroll, DayButton, DayItem, DayText} from './styles';

interface HomeDaysScrollProps {
  selectedMonth: number;
  selectedDay: number;
  changeSelectedDay: (month: number) => void;
  dailyProgress: string[];
  workoutDays: [];
}

const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];
const widthScreen = Math.round(Dimensions.get('window').width);
const dayButtonWidth = Math.round(widthScreen / 9);
const offsetWidth = Math.round((widthScreen - dayButtonWidth) / 2);

export function HomeDaysScroll({
  selectedMonth,
  selectedDay,
  changeSelectedDay,
  dailyProgress,
  workoutDays,
}: HomeDaysScrollProps) {
  const dayRef = useRef();
  const [chosenDay, setChosenDay] = useState(selectedMonth);
  const [firstRender, setFirstRender] = useState(true);

  let days = [];
  let daysInMonth = Number(
    new Date(new Date().getFullYear(), selectedMonth + 1, 0),
  );
  for (let i = 1; i < daysInMonth; i++) {
    days.push(i);
  }

  useEffect(() => {
    changeSelectedDay(chosenDay);
  }, [chosenDay]);

  useEffect(() => {
    setTimeout(() => {
      if (selectedMonth === new Date().getMonth()) {
        scrollToDay(new Date().getDate());
      } else {
        scrollToDay(1);
      }
    }, 10);

    setFirstRender(false);
  }, [selectedMonth]);

  function handleScrollEnd(event: NativeSyntheticEvent<NativeScrollEvent>) {
    let posX = event.nativeEvent.contentOffset.x;
    let targetDay = Math.round(posX / dayButtonWidth);
    setChosenDay(targetDay);
  }

  function scrollToDay(day: number) {
    const posX = day * dayButtonWidth;
    if (dayRef.current) {
      //@ts-ignore
      dayRef.current.scrollTo({x: posX, y: 0, animated: true});
    }
  }

  return (
    <DaysScroll
      //@ts-ignore
      ref={monthRef}
      horizontal={true}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      snapToInterval={dayButtonWidth}
      // snapToAlignment="start"
      contentContainerStyle={{
        paddingLeft: offsetWidth,
        paddingRight: offsetWidth,
      }}
      onMomentumScrollEnd={handleScrollEnd}>
      {months.map((month, index) => (
        <DayButton
          underlayColor="transparent"
          key={month}
          width={dayButtonWidth}
          onPress={() => setChosenDay(index)}>
          <DayItem
            style={
              index === selectedMonth
                ? {
                    backgroundColor: '#CCC',
                    width: '100%',
                    height: 40,
                  }
                : {}
            }>
            <DayText>{month}</DayText>
          </DayItem>
        </DayButton>
      ))}
    </DaysScroll>
  );
}
