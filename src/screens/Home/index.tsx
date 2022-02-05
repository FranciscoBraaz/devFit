import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {ConfigButton} from '../../components/ConfigButton';
import {HomeMonthScroll} from '../../components/HomeMonthScroll';
import {Legend} from '../../components/Legend';
import {Container} from './styles';

export function Home() {
  const today = new Date();
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
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

  function changeSelectedMonth() {}
  return (
    <Container>
      <HomeMonthScroll
        selectedMonth={selectedMonth}
        changeSelectedMonth={changeSelectedMonth}
      />
      <Legend />
    </Container>
  );
}
