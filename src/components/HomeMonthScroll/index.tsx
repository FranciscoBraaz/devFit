import React, {ReactElement, Ref, RefObject, useRef} from 'react';
import {Dimensions, ScrollView, ScrollViewProps} from 'react-native';
import {MonthScroll, MonthButton, MonthItem, MonthText} from './styles';

interface HomeMonthScrollProps {
  selectedMonth: number;
  changeSelectedMonth: () => void;
}

const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
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

  return (
    <MonthScroll
      //@ts-ignore
      ref={monthRef}
      horizontal={true}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}>
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
