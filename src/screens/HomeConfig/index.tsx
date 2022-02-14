import React from 'react';
import {
  Container,
  Label,
  Input,
  ListArea,
  DayItem,
  DayText,
  LevelItem,
  LevelText,
} from './styles';

export function HomeConfig() {
  const days = ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'];
  const levels = ['Iniciante', 'Intermediário', 'Avançado'];

  return (
    <Container>
      <Label>Seu nome:</Label>
      <Input />

      <Label>Dias em que você treina:</Label>
      <ListArea>
        {days.map((day, index) => (
          <DayItem key={index}>
            <DayText>{day}</DayText>
          </DayItem>
        ))}
      </ListArea>

      <Label>Seu nível:</Label>
      <ListArea>
        {levels.map((level, index) => (
          <LevelItem key={index}>
            <LevelText>{level}</LevelText>
          </LevelItem>
        ))}
      </ListArea>
    </Container>
  );
}
