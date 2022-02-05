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

  useEffect(() => {
    changeSelectedMonth(chosenMonth);
  }, [chosenMonth]);

  function handleScrollEnd(event: NativeSyntheticEvent<NativeScrollEvent>) {
    let posX = event.nativeEvent.contentOffset.x;
    let targetMonth = Math.round(posX / monthButtonWidth);
    setChosenMonth(targetMonth);
  }

  return (
    <MonthScroll
      //@ts-ignore
      ref={monthRef}
      horizontal={true}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      snapToInterval={monthButtonWidth}
      contentContainerStyle={{
        paddingLeft: monthButtonWidth,
        paddingRight: monthButtonWidth,
      }}
      onMomentumScrollEnd={handleScrollEnd}>
      {months.map(month => (
        <MonthButton key={month} width={monthButtonWidth}>
          <MonthItem>
            <MonthText>{month}</MonthText>
          </MonthItem>
        </MonthButton>
      ))}
    </MonthScroll>
  );
}
