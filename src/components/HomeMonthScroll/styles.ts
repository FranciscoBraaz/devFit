import styled from 'styled-components/native';

interface MonthButtonProps {
  width: number;
}

export const MonthScroll = styled.ScrollView``;
export const MonthButton = styled.TouchableHighlight<MonthButtonProps>`
  width: ${props => `${props.width}px`};
  justify-content: center;
  align-items: center;
`;
export const MonthItem = styled.View`
  height: 30px;
  width: 90%;
  border-radius: 30px;
  background-color: #eee;
  align-items: center;
  justify-content: center;
`;
export const MonthText = styled.Text``;
