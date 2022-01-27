import React, {useLayoutEffect} from 'react';
import {Alert, Text} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {DefaultButton} from '../../styles/global';
import {Container, FunnyPhrase, LevelArea, QuestionText} from './styles';
import {changeLevel} from '../../reducers/userReducer';
import {NextButton} from '../../components/NextButton';

const levels = ['Iniciante', 'Intermediário', 'Avançado'];

export function StarterLevel() {
  //@ts-ignore
  const {level, workoutDays} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const route = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: '',
      headerRight: () => <NextButton onPress={handleSubmit} />,
      headerRightContainerStyle: {
        marginRight: 10,
      },
    });
  }, [level]);

  function handleSubmit() {
    // @ts-ignore
    if (!route.params || route.params?.level === '') {
      Alert.alert(
        'Prrencha o campo',
        'Você precisa escolher um nível!',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    } else {
      navigation.navigate('StarterRecommendations');
    }
  }

  function modifyLevel(index: number) {
    navigation.setParams({level: levels[index]});
    dispatch(changeLevel(levels[index]));
  }

  let funnyPhrase = '';

  switch (workoutDays.length) {
    case 1:
      funnyPhrase = 'Só um dia não vai adiantar muito, mas...';
      break;
    case 2:
      funnyPhrase = 'Só 2? Mas quem sou eu para julgar?';
      break;
    case 3:
      funnyPhrase = 'Legal, 3 dias dá pro gasto...';
      break;
    case 4:
      funnyPhrase = 'Legal, 4 dias vai ser top!';
      break;
    case 5:
      funnyPhrase = 'É isso aí, 5 dias é o mínimo, lets GO!';
      break;
    case 6:
      funnyPhrase = 'É, 6 dias não é pra todo mundo...';
      break;
    case 7:
      funnyPhrase = 'Woow! Todo dia? WTF?!';
      break;
  }

  return (
    <Container>
      <FunnyPhrase>{funnyPhrase}</FunnyPhrase>
      <QuestionText>Qual o seu nível?</QuestionText>
      <LevelArea>
        {levels.map((myLevel: string, index: number) => (
          <DefaultButton
            key={index}
            onPress={() => modifyLevel(index)}
            style={{marginBottom: 20}}
            underlayColor="#ccc"
            bgColor={level === myLevel ? '#A5E8BC' : '#eee'}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>{myLevel}</Text>
          </DefaultButton>
        ))}
      </LevelArea>
    </Container>
  );
}
