import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback, useLayoutEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {NextButton} from '../../components/NextButton';
import {changeName} from '../../reducers/userReducer';
import {Container, HeaderText, NameInput} from './styles';

export function StarterName() {
  // @ts-ignore
  const {name} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const [nameValue, setNameValue] = useState('');

  function handleSubmit() {
    // @ts-ignore
    if (!route.params || route.params?.name === '') {
      Alert.alert(
        'Prrencha o campo',
        'Você precisa ter um nome!',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    } else {
      dispatch(changeName(nameValue));
      navigation.navigate('StarterDays');
    }
  }

  function handleChangeName(value: string) {
    setNameValue(value);
    navigation.setParams({name: value});
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: '',
      headerRight: () => <NextButton onPress={handleSubmit} />,
      headerRightContainerStyle: {
        marginRight: 10,
      },
    });
  }, [nameValue]);

  return (
    <Container>
      <HeaderText>Qual o seu nome?</HeaderText>
      <NameInput
        value={nameValue}
        onChangeText={value => handleChangeName(value)}
        autoFocus={true}
        autoCapitalize="words"
        onSubmitEditing={handleSubmit}
      />
    </Container>
  );
}
