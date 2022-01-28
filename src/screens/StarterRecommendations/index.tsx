import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useLayoutEffect} from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';
import {NextButton} from '../../components/NextButton';
import {Container, HeaderSubtext, HeaderText, WorkoutList} from './styles';
import presetWorkouts from '../../presetWorkouts.json';

export function StarterRecommendations() {
  const navigation = useNavigation();
  //@ts-ignore
  const {myWorkouts} = useSelector(state => state.user);

  useEffect(() => {
    navigation.setParams({
      myWorkouts,
    });
  }, [myWorkouts]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: '',
      headerRight: () => (
        <NextButton
          title={myWorkouts.length > 0 ? 'Concluir' : 'Ignorar'}
          onPress={handleSubmit}
        />
      ),
      headerRightContainerStyle: {
        marginRight: 10,
      },
    });
  }, []);

  function handleSubmit() {}

  return (
    <Container>
      <HeaderText>
        Opções de treino pré-criados com base no seu nível.
      </HeaderText>
      <HeaderSubtext>Você selecionou {myWorkouts.length} treinos</HeaderSubtext>
      <WorkoutList
        data={presetWorkouts}
        renderItem={({item}: any) => <Text>{item.name}</Text>}
      />
    </Container>
  );
}
