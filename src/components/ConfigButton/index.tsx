import React from 'react';
import {ConfigButtonArea, ConfigButtonImage} from './styles';

export function ConfigButton() {
  return (
    <ConfigButtonArea>
      <ConfigButtonImage source={require('../../assets/config.png')} />
    </ConfigButtonArea>
  );
}
