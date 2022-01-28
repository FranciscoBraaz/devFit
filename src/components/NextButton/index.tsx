import React from 'react';
import {NextAction} from './styles';

interface NextButtonProps {
  onPress: () => void;
  title?: string;
}

export function NextButton({onPress, title}: NextButtonProps) {
  return <NextAction title={!!title ? title : 'Próximo'} onPress={onPress} />;
}
