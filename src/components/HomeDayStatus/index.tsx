import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {useDispatch} from 'react-redux';
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
  const [timeLeft, setTimeLeft] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const timerFunction = () => {
      let now = Date.now();
      let endToday = new Date();
      endToday.setHours(23);
      endToday.setMinutes(59);
      endToday.setSeconds(59);
      let endTodayMilliSeconds = endToday.getTime();
      let diff = endTodayMilliSeconds - now;

      let h: number | string = Math.floor(diff / (1000 * 60 * 60));
      let m: number | string = Math.floor(diff / (1000 * 60) - h * 60);
      let s: number | string = Math.floor(diff / 1000 - m * 60 - h * 60 * 60);

      h = h < 10 ? '0' + h : h;
      m = m < 10 ? '0' + m : m;
      s = s < 10 ? '0' + s : s;

      setTimeLeft(`${h}h ${m}m ${s}s`);
    };

    let timer = setInterval(timerFunction, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

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
              onPress={() => dispatch(removeProgress(dateFormated))}
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
              onPress={() => dispatch(addProgress(dateFormated))}
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
            <BallonSmallText>Você tem {timeLeft} para treinar</BallonSmallText>
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
