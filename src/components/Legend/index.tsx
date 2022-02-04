import React from 'react';
import {LegendBox, LegendContainer, LegendItem, LegendText} from './styles';

const legends = [
  {title: 'Hoje', bgColor: '#B5EEFF'},
  {title: 'Treino feito', bgColor: '#B5FFB8'},
  {title: 'Treino perdido', bgColor: '#FFB5B5'},
  {title: 'Dia de descanso', bgColor: '#F4F4F4', opacity: 0.5},
  {title: 'Dia futuro', bgColor: '#B5EEFF'},
];

export function Legend() {
  return (
    <LegendContainer>
      <LegendText>Legenda:</LegendText>
      {legends.map(legend => (
        <LegendItem>
          <LegendBox
            style={{
              backgroundColor: legend.bgColor,
              opacity: legend.opacity ? legend.opacity : 1,
            }}
          />
          <LegendText>{legend.title}</LegendText>
        </LegendItem>
      ))}
    </LegendContainer>
  );
}
