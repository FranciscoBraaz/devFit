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
import {MonthScroll, MonthButton, MonthItem, MonthText} from './styles';

interface HomeMonthScrollProps {
  selectedMonth: number;
  changeSelectedMonth: (month: number) => void;
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
const monthButtonWidth = widthScreen / 3;

export function HomeMonthScroll({
  selectedMonth,
  changeSelectedMonth,
}: HomeMonthScrollProps) {
  const monthRef = useRef();
  const [chosenMonth, setChosenMonth] = useState(selectedMonth);
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    changeSelectedMonth(chosenMonth);
  }, [chosenMonth]);

  useEffect(() => {
    if (firstRender) {
      setTimeout(() => {
        scrollToMonth(selectedMonth);
      }, 10);

      setFirstRender(false);
    }
  }, [selectedMonth, firstRender]);

  function handleScrollEnd(event: NativeSyntheticEvent<NativeScrollEvent>) {
    let posX = event.nativeEvent.contentOffset.x;
    let targetMonth = Math.round(posX / monthButtonWidth);
    setChosenMonth(targetMonth);
  }

  function scrollToMonth(month: number) {
    const posX = month * monthButtonWidth;
    if (monthRef.current) {
      //@ts-ignore
      monthRef.current.scrollTo({x: posX, y: 0, animated: true});
    }
  }

  return (
    <MonthScroll
      //@ts-ignore
      ref={monthRef}
      horizontal={true}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      snapToInterval={monthButtonWidth}
      // snapToAlignment="start"
      contentContainerStyle={{
        paddingLeft: monthButtonWidth,
        paddingRight: monthButtonWidth,
      }}
      onMomentumScrollEnd={handleScrollEnd}>
      {months.map((month, index) => (
        <MonthButton
          underlayColor="transparent"
          key={month}
          width={monthButtonWidth}
          onPress={() => setChosenMonth(index)}>
          <MonthItem
            style={
              index === selectedMonth
                ? {
                    backgroundColor: '#CCC',
                    width: '100%',
                    height: 40,
                  }
                : {}
            }>
            <MonthText>{month}</MonthText>
          </MonthItem>
        </MonthButton>
      ))}
    </MonthScroll>
  );
}
