import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useLayoutEffect, useState} from 'react';
import {ExerciseItem} from '../../components/ExerciseItem';
import {ExerciseProps} from '../../components/Workout/interfaces';
import {DefaultButton} from '../../styles/global';
import {
  ButtonText,
  Container,
  ExercisesArea,
  ExercisesList,
  NameInput,
  SaveButtonArea,
  SaveButtonImage,
} from './styles';

const SaveWorkoutButton = () => (
  <SaveButtonArea>
    <SaveButtonImage source={require('../../assets/check-black.png')} />
  </SaveButtonArea>
);

export default function EditWorkout() {
  const navigation = useNavigation();
  const route = useRoute();
  //@ts-ignore
  let isEdit = route.params && route.params.workout ? true : false;
  let workout =
    //@ts-ignore
    route.params && route.params.workout ? route.params.workout : null;
  const [name, setName] = useState(workout ? workout.name : '');
  const [exercises, setExercises] = useState(workout ? workout.exercises : []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEdit ? 'Editar treino' : 'Adicionar treino',
      headerRight: () => <SaveWorkoutButton />,
      headerRightContainerStyle: {
        marginRight: 10,
      },
    });
  }, []);

  function editWorkout(item: ExerciseProps) {
    let newExercises = [...exercises];
    newExercises = newExercises.map(exercise => {
      if (exercise.id === item.id) {
        exercise = {...item};
      }
    });

    setExercises(newExercises);
  }

  function removeWorkout(item: ExerciseProps) {
    let newExercises = [...exercises];
    newExercises = newExercises.filter(exercise => exercise.id !== item.id);
    setExercises(newExercises);
  }

  return (
    <Container>
      <NameInput
        value={name}
        onChangeText={value => setName(value)}
        placeholder="Digite o nome do treino"
      />
      <ExercisesArea>
        <DefaultButton bgColor="#A4C34E" padding="0px 20px">
          <ButtonText>Adicionar treino</ButtonText>
        </DefaultButton>

        <ExercisesList
          data={exercises}
          renderItem={({item}: any) => (
            <ExerciseItem
              data={item}
              editAction={editWorkout}
              removeAction={removeWorkout}
            />
          )}
          keyExtractor={(item: any) => item.name}
        />
      </ExercisesArea>
    </Container>
  );
}
