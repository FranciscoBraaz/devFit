import React from 'react';
import {Text} from 'react-native';
import {DayButton, DayItem, DayText} from './styles';

interface DayProps {
  day: number;
  month: number;
  dailyProgress: string[];
  workoutDays: number[];
  width: number;
  onPress: () => void;
}

export function Day({
  day,
  month,
  dailyProgress,
  workoutDays,
  width,
  onPress,
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
  } else {
    opacity = 0.5;
  }

  if (today.getTime() === thisDate.getTime()) {
    bgColor = '#B5EEFF';
    opacity = 1;
  }

  return (
    <DayButton width={width}>
      <DayItem style={{backgroundColor: bgColor, opacity}}>
        <DayText>{day}</DayText>
      </DayItem>
    </DayButton>
  );
}
