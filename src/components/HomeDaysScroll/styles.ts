import styled from 'styled-components/native';

interface MonthButtonProps {
  width: number;
}

export const DaysScroll = styled.ScrollView`
  width: 100%;
  height: 50px;
`;
export const DayButton = styled.TouchableHighlight<MonthButtonProps>`
  width: ${props => `${props.width}px`};
  justify-content: center;
  align-items: center;
`;
export const DayItem = styled.View`
  height: 30px;
  width: 90%;
  border-radius: 30px;
  background-color: #eee;
  align-items: center;
  justify-content: center;
`;
export const DayText = styled.Text``;
