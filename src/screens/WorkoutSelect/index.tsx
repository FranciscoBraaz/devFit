import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useSelector} from 'react-redux';
import {Workout} from '../../components/Workout';
import {Container, WorkoutList} from './styles';

export function WorkoutSelect() {
  //@ts-ignore
  const {myWorkouts} = useSelector(state => state.user);
  const navigation = useNavigation();

  function handleGoWorkout(item: any) {
    navigation.navigate('WorkoutChecklist', {});
  }

  return (
    <Container>
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
