import React from 'react';
import {Text} from 'react-native';
import {DayButton, DayItem, DayText} from './styles';

interface DayProps {
  day: number;
  month: number;
  dailyProgress: string[];
  workoutDays: number[];
  width: number;
  onClickedDay: () => void;
}

export function Day({
  day,
  month,
  dailyProgress,
  workoutDays,
  width,
  onClickedDay,
}: DayProps) {
  let bgColor = '#F4F4F4';
  let opacity = 1;

  let today = new Date();
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);
  today.setMilliseconds(0);

  let thisDate = new Date(today.getFullYear(), month, day);

  if (workoutDays.includes(thisDate.getDay())) {
    if (thisDate.getTime() < today.getTime()) {
      let thisYear = thisDate.getFullYear();
      let thisMonth = String(thisDate.getMonth() + 1).padStart(2, '0');
      let thisDay = String(thisDate.getDate()).padStart(2, '0');

      let dateFormated = `${thisYear}-${thisMonth}-${thisDay}`;

      if (dailyProgress.includes(dateFormated)) {
        bgColor = '#B5FFB8'; //TREINOU
      } else {
        bgColor = '#FFB5B5'; // NÃO TREINOU
      }
    }
  } else {
    opacity = 0.3;
  }

  if (today.getTime() === thisDate.getTime()) {
    bgColor = '#B5EEFF';
    opacity = 1;
  }

  return (
    <DayButton width={width} onPress={onClickedDay} underlayColor="transparent">
      <DayItem style={{backgroundColor: bgColor, opacity}}>
        <DayText>{day}</DayText>
      </DayItem>
    </DayButton>
  );
}
