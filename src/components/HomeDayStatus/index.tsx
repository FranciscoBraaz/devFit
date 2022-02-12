import React from 'react';
import {Text} from 'react-native';
import {DefaultButton} from '../../styles/global';
import {
  BallonSmallText,
  BallonTriangle,
  BalloonArea,
  BalloonBigText,
  ButtonText,
  Strong,
} from './styles';

interface HomeDayStatusProps {
  selectedMonth: number;
  selectedDay: number;
  changeSelectedDay: (day: number) => void;
  dailyProgress: string[];
  workoutDays: number[];
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
  let today = new Date();
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);
  today.setMilliseconds(0);

  let thisDate = new Date(today.getFullYear(), selectedMonth, selectedDay);
  let thisYear = thisDate.getFullYear();
  let thisMonth = String(thisDate.getMonth() + 1).padStart(2, '0');
  let thisDay = String(thisDate.getDate()).padStart(2, '0');

  let dateFormated = `${thisYear}-${thisMonth}-${thisDay}`;

  let dayOff = false;
  let isToday = false;
  let isFuture = false;
  let isDone = false;

  if (!workoutDays.includes(thisDate.getDay())) {
    dayOff = true;
  } else if (thisDate.getTime() > today.getTime()) {
    isFuture = true;
  } else {
    if (dailyProgress.includes(dateFormated)) {
      isDone = true;
    }
  }

  if (thisDate.getTime() === today.getTime()) {
    isToday = true;
  }

  return (
    <>
      <BallonTriangle />
      <BalloonArea>
        {dayOff && <BalloonBigText>Dia de descanso!</BalloonBigText>}
        {isFuture && <BalloonBigText>Data no futuro</BalloonBigText>}
        {!dayOff && !isFuture && isDone && (
          <>
            <BalloonBigText>
              <Strong>Parabéns</Strong>, você treinou!
            </BalloonBigText>
            <DefaultButton
              onPress={() => removeProgress(dateFormated)}
              bgColor="#4ac34e"
              underlayColor="#4ac34e"
              style={{marginTop: 20}}>
              <ButtonText>DESMARCAR</ButtonText>
            </DefaultButton>
          </>
        )}
        {!dayOff && !isFuture && !isDone && !isToday && (
          <>
            <BalloonBigText>
              Opa, você <Strong>não treinou</Strong> neste dia!
            </BalloonBigText>
            <DefaultButton
              onPress={() => addProgress(dateFormated)}
              bgColor="#4ac34e"
              underlayColor="#4ac34e"
              style={{marginTop: 20}}>
              <ButtonText>MARCAR COMO FEITO</ButtonText>
            </DefaultButton>
          </>
        )}

        {!dayOff && !isFuture && !isDone && isToday && (
          <>
            <BalloonBigText>
              <Strong>HOJE</Strong> TEM TREINO 🚀
            </BalloonBigText>
            <BallonSmallText>Você tem 15 minutos para treinar</BallonSmallText>
            <DefaultButton
              onPress={goToWorkout}
              bgColor="#4ac34e"
              underlayColor="#4ac34e"
              style={{marginTop: 20}}>
              <ButtonText>INICIAR TREINO</ButtonText>
            </DefaultButton>
          </>
        )}
      </BalloonArea>
    </>
  );
}
