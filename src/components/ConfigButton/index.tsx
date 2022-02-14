import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ConfigButtonArea, ConfigButtonImage} from './styles';

export function ConfigButton() {
  const navigation = useNavigation();
  return (
    <ConfigButtonArea
      underlayColor="transparent"
      onPress={() => navigation.navigate('HomeConfig')}>
      <ConfigButtonImage source={require('../../assets/config.png')} />
    </ConfigButtonArea>
  );
}
