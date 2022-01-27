import React from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';
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
  const {name} = useSelector(state => state.user);

  let firstName = name.split(' ')[0];
  let arrayDays = [
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
    'Domingo',
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
          <DefaultButton key={index} width="100px" style={{marginBottom: 20}}>
            <Text style={{fontWeight: 'bold'}}>{day}</Text>
          </DefaultButton>
        ))}
      </DaysArea>
    </Container>
  );
}
