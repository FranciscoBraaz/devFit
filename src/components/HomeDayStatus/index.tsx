import React from 'react';
import {Text} from 'react-native';
import {BallonTriangle, BalloonArea} from './styles';

interface HomeDayStatusProps {
  selectedMonth: number;
  selectedDay: number;
  changeSelectedDay: (day: number) => void;
  dailyProgress: string[];
  workoutDays: [];
  addProgress: (dateInfo: string) => void;
  removeProgress: (dateInfo: string) => void;
  goToWorkout: () => void;
}

export function HomeDayStatus({
  selectedMonth,
  selectedDay,
  changeSelectedDay,
  dailyProgress,
  workoutDays,
  addProgress,
  removeProgress,
  goToWorkout,
}: HomeDayStatusProps) {
  return (
    <>
      <BallonTriangle />
      <BalloonArea>
        <Text>.</Text>
      </BalloonArea>
    </>
  );
}
