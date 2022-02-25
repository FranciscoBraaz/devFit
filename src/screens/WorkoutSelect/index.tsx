import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useSelector} from 'react-redux';
import {Workout} from '../../components/Workout';
import {Container, Title, WorkoutList} from './styles';

export function WorkoutSelect() {
  const {myWorkouts, lastWorkout: lastWorkoutState} = useSelector(
    //@ts-ignore
    state => state.user,
  );
  const navigation = useNavigation();
  let lastWorkout = null;

  if (lastWorkoutState) {
    lastWorkout = myWorkouts.find(
      (myWorkout: any) => String(myWorkout.id) === String(lastWorkoutState),
    );
  }

  function handleGoWorkout(workout: any) {
    navigation.navigate('WorkoutChecklist', {workout});
  }

  return (
    <Container>
      {lastWorkout && (
        <>
          <Title>Seu último treino foi:</Title>
          <Workout item={lastWorkout} />
        </>
      )}
      <Title>Escolha seu treino:</Title>
      <WorkoutList
        data={myWorkouts}
        renderItem={({item, index}: any) => (
          <Workout goAction={() => handleGoWorkout(item)} item={item} />
        )}
        keyExtractor={(item: any, index: number) => String(index)}
      />
    </Container>
  );
}
