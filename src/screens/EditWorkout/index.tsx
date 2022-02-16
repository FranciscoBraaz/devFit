import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useLayoutEffect, useState} from 'react';
import {Container, NameInput, SaveButtonArea, SaveButtonImage} from './styles';

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

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEdit ? 'Editar treino' : 'Adicionar treino',
      headerRight: () => <SaveWorkoutButton />,
      headerRightContainerStyle: {
        marginRight: 10,
      },
    });
  }, []);

  return (
    <Container>
      <NameInput
        value={name}
        onChangeText={value => setName(value)}
        placeholder="Digite o nome do treino"
      />
    </Container>
  );
}
