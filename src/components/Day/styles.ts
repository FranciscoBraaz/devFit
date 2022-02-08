import styled from 'styled-components/native';

interface DayButtonProps {
  width: number;
}

export const DayButton = styled.TouchableHighlight<DayButtonProps>`
  width: ${props => `${props.width}px`};
  justify-content: center;
  align-items: center;
`;
export const DayItem = styled.View`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  background-color: #eee;
  align-items: center;
  justify-content: center;
`;
export const DayText = styled.Text``;
