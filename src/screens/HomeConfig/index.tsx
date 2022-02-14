import React, {useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeLevel,
  changeName,
  changeWorkoutDays,
} from '../../reducers/userReducer';
import {
  Container,
  Label,
  Input,
  ListArea,
  DayItem,
  DayText,
  LevelItem,
  LevelText,
} from './styles';

export function HomeConfig() {
  const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
  const levels = ['Iniciante', 'Intermediário', 'Avançado'];
  //@ts-ignore
  const {name, workoutDays, level} = useSelector(state => state.user);
  const dispatch = useDispatch();

  function toggleWorkoutDay(day: number) {
    let newWorkoutDays = [...workoutDays];
    if (!newWorkoutDays.includes(day)) {
      newWorkoutDays.push(day);
      dispatch(changeWorkoutDays(newWorkoutDays));
      return;
    }

    if (newWorkoutDays.length > 1) {
      newWorkoutDays = newWorkoutDays.filter(workoutDay => workoutDay !== day);
      dispatch(changeWorkoutDays(newWorkoutDays));
    } else {
      Alert.alert('', 'Opa, você precisa treinar pelo menos 1 dia');
    }
  }

  function handleChangeLevel(level: string) {
    dispatch(changeLevel(level));
  }

  return (
    <Container>
      <Label>Seu nome:</Label>
      <Input value={name} onChangeText={value => dispatch(changeName(value))} />

      <Label>Dias em que você treina:</Label>
      <ListArea>
        {days.map((day, index) => (
          <DayItem
            key={index}
            onPress={() => toggleWorkoutDay(index)}
            underlayColor="transparent"
            style={
              workoutDays.includes(index) ? {backgroundColor: '#A5E8BC'} : {}
            }>
            <DayText>{day}</DayText>
          </DayItem>
        ))}
      </ListArea>

      <Label>Seu nível:</Label>
      <ListArea>
        {levels.map((userlevel, index) => (
          <LevelItem
            underlayColor="transparent"
            key={index}
            style={userlevel === level ? {backgroundColor: '#A5E8BC'} : {}}
            onPress={() => handleChangeLevel(userlevel)}>
            <LevelText>{userlevel}</LevelText>
          </LevelItem>
        ))}
      </ListArea>
    </Container>
  );
}
