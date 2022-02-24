import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {StatusBar} from 'react-native';
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

interface RenderItemProps {
  item: ExerciseProps;
}

export default function WorkoutChecklist() {
  const navigation = useNavigation();
  const route = useRoute();
  //@ts-ignore
  let workout: WorkoutProps = route.params.workout;
  const [exercises, setExercises] = useState<ExerciseProps[]>([
    ...workout.exercises,
  ]);

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
          renderItem={({item}: any) => <ExerciseItemCheck data={item} />}
          keyExtractor={(item: any) => item.id.toString()}
        />
      </SafeArea>
    </Container>
  );
}
