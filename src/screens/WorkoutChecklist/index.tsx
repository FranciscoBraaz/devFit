import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {Alert, StatusBar} from 'react-native';
import {ExerciseItem} from '../../components/ExerciseItem';
import {ExerciseItemCheck} from '../../components/ExerciseItemCheck';
import {ExerciseProps, WorkoutProps} from '../../components/Workout/interfaces';
import {
  Container,
  SafeArea,
  WorkoutClose,
  WorkoutCloseText,
  WorkoutHeader,
  WorkoutList,
  WorkoutTitle,
} from './styles';

interface ExerciseCheckProps extends ExerciseProps {
  done: boolean;
}

export default function WorkoutChecklist() {
  const navigation = useNavigation();
  const route = useRoute();
  //@ts-ignore
  let workout: WorkoutProps = route.params.workout;
  const [exercises, setExercises] = useState<ExerciseCheckProps[]>(() => {
    let newExercises = workout.exercises.map(exercise => ({
      ...exercise,
      done: false,
    }));

    return newExercises;
  });

  function checkAction(item: ExerciseCheckProps, index: number) {
    let newExercises = [...exercises];
    if (newExercises[index].done) {
      newExercises[index].done = false;
    } else {
      newExercises[index].done = true;
    }

    setExercises(newExercises);

    checkCompletedWorkout();
  }

  function checkCompletedWorkout() {
    if (exercises.every(exercise => exercise.done)) {
      Alert.alert('', 'Treino completado!');
    }
  }

  return (
    <Container source={require('../../assets/fitness.jpg')}>
      <StatusBar barStyle="light-content" />
      <SafeArea>
        <WorkoutHeader>
          <WorkoutTitle>{workout.name}</WorkoutTitle>
          <WorkoutClose
            onPress={() => navigation.goBack()}
            underlayColor="transparent">
            <WorkoutCloseText>X</WorkoutCloseText>
          </WorkoutClose>
        </WorkoutHeader>
        <WorkoutList
          data={exercises}
          renderItem={({item, index}: any) => (
            <ExerciseItemCheck
              data={item}
              index={index}
              checkAction={() => checkAction(item, index)}
            />
          )}
          keyExtractor={(item: any) => item.id.toString()}
        />
      </SafeArea>
    </Container>
  );
}
