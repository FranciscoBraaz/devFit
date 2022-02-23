import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {CustomModal} from '../../components/CustomModal';
import {ExerciseItem} from '../../components/ExerciseItem';
import {ExerciseProps, WorkoutProps} from '../../components/Workout/interfaces';
import {DefaultButton} from '../../styles/global';
import {useSourceImage} from '../../utils/useSourceImage';
import {
  ButtonText,
  Container,
  ExercisesArea,
  ExercisesList,
  ModalInput,
  ModalLabel,
  ModalMuscle,
  ModalMuscleImage,
  ModalMuscles,
  ModalNumericArea,
  ModalNumericItem,
  NameInput,
  SaveButtonArea,
  SaveButtonImage,
} from './styles';
import 'react-native-get-random-values';
import * as uuid from 'uuid';
import {Alert} from 'react-native';

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
  const [exercises, setExercises] = useState<ExerciseProps[]>(
    workout ? workout.exercises : [],
  );
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalName, setModalName] = useState('');
  const [modalMuscle, setModalMuscle] = useState('');
  const [modalReps, setModalReps] = useState('');
  const [modalSets, setModalSets] = useState('');
  const [modalLoad, setModalLoad] = useState('');
  const [modalId, setModalId] = useState('');

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
    setModalName(item.name);
    setModalMuscle(item.muscle);
    setModalReps(item.reps);
    setModalSets(item.sets);
    setModalLoad(item.load);
    setModalId(item.id);

    setModalIsOpen(true);
  }

  function saveWourkout() {
    if (
      modalName !== '' ||
      modalReps !== '' ||
      modalLoad !== '' ||
      modalSets !== '' ||
      modalMuscle !== ''
    ) {
      Alert.alert('', 'Preencha todas informações');
      return;
    }

    let newExercises = [...exercises];
    if (modalId) {
      let index = newExercises.findIndex(exercise => exercise.id === modalId);
      let exerciseSelected = newExercises[index];
      exerciseSelected.name = modalName;
      exerciseSelected.reps = modalReps;
      exerciseSelected.sets = modalSets;
      exerciseSelected.load = modalLoad;
      exerciseSelected.muscle = modalMuscle;
    } else {
      let newExercise = {
        id: uuid.v4(),
        name: modalName,
        reps: modalReps,
        sets: modalSets,
        load: modalLoad,
        muscle: modalMuscle,
      };

      newExercises.push(newExercise);
    }

    setExercises(newExercises);
    setModalIsOpen(false);
  }

  function resetWorkout() {
    setModalName('');
    setModalMuscle('');
    setModalReps('');
    setModalSets('');
    setModalLoad('');
    setModalId('');
  }

  function addWorkout() {
    resetWorkout();
    setModalIsOpen(true);
  }

  function removeWorkout(item: ExerciseProps) {
    // Alert.alert('Alert Title', 'Remove');
    let newExercises = [...exercises];
    newExercises = newExercises.filter(exercise => exercise.id !== item.id);
    setExercises(newExercises);
  }
  const muscles = [
    'abs',
    'back',
    'biceps',
    'chest',
    'gluteos',
    'legs',
    'shoulders',
    'triceps',
  ];

  const renderMuscle = () => {
    return (
      <>
        {muscles.map((muscle: string) => (
          <ModalMuscle
            key={muscle}
            opacity={modalMuscle === muscle ? 1 : 0.3}
            onPress={() => setModalMuscle(muscle)}
            underlayColor="transparent">
            <ModalMuscleImage source={useSourceImage(muscle)} />
          </ModalMuscle>
        ))}
      </>
    );
  };

  return (
    <Container>
      <CustomModal
        isVisible={modalIsOpen}
        onClose={() => setModalIsOpen(false)}>
        <ModalLabel>Músculo de foco</ModalLabel>
        <ModalMuscles horizontal={true} showsHorizontalScrollIndicator={false}>
          {renderMuscle()}
        </ModalMuscles>

        <ModalLabel>Nome do exercício</ModalLabel>
        <ModalInput
          value={modalName}
          onChangeText={value => setModalName(value)}
        />

        <ModalNumericArea>
          <ModalNumericItem>
            <ModalLabel>Séries</ModalLabel>
            <ModalInput
              value={modalSets}
              onChangeText={value => setModalSets(value)}
            />
          </ModalNumericItem>
          <ModalNumericItem>
            <ModalLabel>Repetições</ModalLabel>
            <ModalInput
              value={modalReps}
              onChangeText={value => setModalReps(value)}
            />
          </ModalNumericItem>
          <ModalNumericItem>
            <ModalLabel>Carga</ModalLabel>
            <ModalInput
              value={modalLoad}
              onChangeText={value => setModalLoad(value)}
            />
          </ModalNumericItem>
        </ModalNumericArea>

        <DefaultButton
          bgColor="#4AC34E"
          padding="0px 20px"
          onPress={saveWourkout}
          underlayColor="#4AC34E">
          <ButtonText>Salvar</ButtonText>
        </DefaultButton>
      </CustomModal>
      <NameInput
        value={name}
        onChangeText={value => setName(value)}
        placeholder="Digite o nome do treino"
      />
      <ExercisesArea>
        <DefaultButton
          bgColor="#A4C34E"
          padding="0px 20px"
          onPress={addWorkout}
          underlayColor="#4AC34E">
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
