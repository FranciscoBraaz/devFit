import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {Alert, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {NextButton} from '../../components/NextButton';
import {changeWorkoutDays} from '../../reducers/userReducer';
import {DefaultButton} from '../../styles/global';
import {
  BoldText,
  Container,
  DaysArea,
  HeaderSubtext,
  HeaderText,
} from './styles';

export function StarterDays() {
  //@ts-ignore
  const {name, workoutDays} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();

  function handleSubmit() {
    // @ts-ignore
    if (!route.params || route.params?.workoutDays.length < 1) {
      Alert.alert(
        'Prrencha o campo',
        'Você precisa escolher pelos menos um dia!',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    } else {
      navigation.navigate('StarterLevel');
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: '',
      headerRight: () => <NextButton onPress={handleSubmit} />,
      headerRightContainerStyle: {
        marginRight: 10,
      },
    });
  }, [workoutDays]);

  function modifyWorkoutDays(daySelected: number) {
    let newWorkoutDays = [...workoutDays];
    if (newWorkoutDays.includes(daySelected)) {
      newWorkoutDays = newWorkoutDays.filter(
        (day: number) => day !== daySelected,
      );
    } else {
      newWorkoutDays = [...newWorkoutDays, daySelected];
    }

    navigation.setParams({workoutDays: newWorkoutDays});
    dispatch(changeWorkoutDays(newWorkoutDays));
  }

  let firstName = name.split(' ')[0];
  let arrayDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  return (
    <Container>
      <HeaderText>
        Opa, <BoldText>{firstName}</BoldText>. Tudo bem?
      </HeaderText>
      <HeaderSubtext>
        Quais <BoldText>dias da semana</BoldText> você vai treinar?
      </HeaderSubtext>
      <DaysArea>
        {arrayDays.map((day: string, index: number) => (
          <DefaultButton
            key={index}
            onPress={() => modifyWorkoutDays(index)}
            width="100px"
            style={{marginBottom: 20}}
            underlayColor="#ccc"
            bgColor={workoutDays.includes(index) ? '#A5E8BC' : '#eee'}>
            <Text style={{fontWeight: 'bold'}}>{day}</Text>
          </DefaultButton>
        ))}
      </DaysArea>
    </Container>
  );
}
