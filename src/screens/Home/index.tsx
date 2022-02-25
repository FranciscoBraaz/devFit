import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {ConfigButton} from '../../components/ConfigButton';
import {HomeDaysScroll} from '../../components/HomeDaysScroll';
import {HomeDayStatus} from '../../components/HomeDayStatus';
import {HomeMonthScroll} from '../../components/HomeMonthScroll';
import {Legend} from '../../components/Legend';
import {LegendText} from '../../components/Legend/styles';
import {addProgress, removeProgress} from '../../reducers/userReducer';
import {Container} from './styles';

export function Home() {
  const today = new Date();
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
  const [selectedDay, setSelectedDay] = useState(today.getDate());
  const navigation = useNavigation();
  //@ts-ignore
  const {dailyProgress, workoutDays} = useSelector(state => state.user);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Seu progresso diário',
      headerRight: () => <ConfigButton />,
      headerRightContainerStyle: {
        marginRight: 10,
      },
    });
  }, []);

  function changeSelectedMonth(month: number) {
    setSelectedMonth(month);
  }

  function changeSelectedDay(day: number) {
    setSelectedDay(day);
  }

  return (
    <Container>
      <HomeMonthScroll
        selectedMonth={selectedMonth}
        changeSelectedMonth={changeSelectedMonth}
      />
      <HomeDaysScroll
        selectedMonth={selectedMonth}
        selectedDay={selectedDay}
        changeSelectedDay={changeSelectedDay}
        dailyProgress={dailyProgress}
        workoutDays={workoutDays}
      />
      <HomeDayStatus
        selectedMonth={selectedMonth}
        selectedDay={selectedDay}
        changeSelectedDay={changeSelectedDay}
        dailyProgress={dailyProgress}
        workoutDays={workoutDays}
        addProgress={addProgress}
        removeProgress={removeProgress}
        goToWorkout={() => navigation.navigate('WorkoutSelect')}
      />
      <Legend />
    </Container>
  );
}
