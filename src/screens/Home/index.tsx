import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {Text, View} from 'react-native';
import {ConfigButton} from '../../components/ConfigButton';
import {Legend} from '../../components/Legend';
import {Container} from './styles';

export function Home() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Seu progresso diário',
      headerRight: () => <ConfigButton />,
      headerRightContainerStyle: {
        marginRight: 10,
      },
    });
  }, []);

  return (
    <Container>
      <Legend />
    </Container>
  );
}
