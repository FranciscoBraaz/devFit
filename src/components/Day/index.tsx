import React from 'react';
import {Text} from 'react-native';

interface DayProps {
  day: number;
  month: number;
  dailyProgress: string[];
  workoutDays: [];
  onPress: () => void;
}

export function Day({
  day,
  month,
  dailyProgress,
  workoutDays,
  onPress,
}: DayProps) {
  return <Text>{day}</Text>;
}
