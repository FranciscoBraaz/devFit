import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Alert, Text} from 'react-native';
import {CustomModal} from '../../components/CustomModal';
import {ExerciseItem} from '../../components/ExerciseItem';
import {ExerciseProps} from '../../components/Workout/interfaces';
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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalName, setModalName] = useState('');
  const [modalMuscle, setModalMuscle] = useState('');
  const [modalReps, setModalReps] = useState('');
  const [modalSets, setModalSets] = useState('');
  const [modalLoad, setModalLoad] = useState('');

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

    setModalIsOpen(true);

    // let newExercises = [...exercises];
    // newExercises = newExercises.map(exercise => {
    //   if (exercise.id === item.id) {
    //     exercise = {...item};
    //   }
    // });
    // setExercises(newExercises);
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
        <ModalInput value={modalName} />

        <ModalNumericArea>
          <ModalNumericItem>
            <ModalLabel>Séries</ModalLabel>
            <ModalInput value={modalSets} />
          </ModalNumericItem>
          <ModalNumericItem>
            <ModalLabel>Repetições</ModalLabel>
            <ModalInput value={modalReps} />
          </ModalNumericItem>
          <ModalNumericItem>
            <ModalLabel>Carga</ModalLabel>
            <ModalInput value={modalLoad} />
          </ModalNumericItem>
        </ModalNumericArea>

        <DefaultButton bgColor="#4AC34E" padding="0px 20px">
          <ButtonText>Salvar</ButtonText>
        </DefaultButton>
      </CustomModal>
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
