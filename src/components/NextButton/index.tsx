import React from 'react';
import {NextAction} from './styles';

interface NextButtonProps {
  onPress: () => void;
}

export function NextButton({onPress}: NextButtonProps) {
  return <NextAction title="Próximo" onPress={onPress} />;
}
