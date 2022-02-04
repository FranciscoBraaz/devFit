import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useLayoutEffect} from 'react';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {NextButton} from '../../components/NextButton';
import {Container, HeaderSubtext, HeaderText, WorkoutList} from './styles';
import presetWorkouts from '../../presetWorkouts.json';
import {WorkoutProps} from '../../components/Workout/interfaces';
import {Workout} from '../../components/Workout';
import {changeMyWorkouts} from '../../reducers/userReducer';

interface ItemWorkoutProps {
  item: WorkoutProps;
}

export function StarterRecommendations() {
  const navigation = useNavigation();
  //@ts-ignore
  const {myWorkouts} = useSelector(state => state.user);
  const dispatch = useDispatch();

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
  }, [myWorkouts]);

  function handleSubmit() {
    navigation.reset({
      index: 0,
      routes: [{name: 'AppTab'}],
    });
  }

  function modifyWorkouts(workout: WorkoutProps) {
    let newMyWorkouts = [];
    let index = myWorkouts.findIndex(
      (myWorkout: WorkoutProps) => myWorkout.id === workout.id,
    );
    if (index < 0) {
      newMyWorkouts = [...myWorkouts, workout];
    } else {
      newMyWorkouts = myWorkouts.filter(
        (myWorkout: WorkoutProps) => myWorkout.id !== workout.id,
      );
    }

    dispatch(changeMyWorkouts(newMyWorkouts));
  }

  function renderText() {
    if (myWorkouts.length === 1) {
      return `${myWorkouts.length} treino`;
    } else {
      return `${myWorkouts.length} treinos`;
    }
  }

  return (
    <Container>
      <HeaderText>
        Opções de treino pré-criados com base no seu nível.
      </HeaderText>
      <HeaderSubtext>Você selecionou {renderText()}</HeaderSubtext>
      <WorkoutList
        data={presetWorkouts}
        renderItem={({item, index}: any) => (
          <Workout key={index} item={item} modifyWorkouts={modifyWorkouts} />
        )}
        //@ts-ignore
        keyExtractor={(item: any) => item.id}
      />
    </Container>
  );
}
