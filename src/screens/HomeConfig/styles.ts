import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin: 0 30px;
`;

export const Label = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
  color: #000;
`;

export const Input = styled.TextInput`
  border: 1px solid #ccc;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  padding: 10px;
  color: #000;
`;

export const ListArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const DayItem = styled.TouchableHighlight`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: #eee;
  justify-content: center;
  align-items: center;
`;

export const DayText = styled.Text`
  color: #000;
`;

export const LevelItem = styled.TouchableHighlight`
  padding: 0 15px;
  background-color: #eee;
  height: 30px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const LevelText = styled.Text`
  color: #000;
`;

export const ResetButton = styled.TouchableHighlight`
  background-color: transparent;
  align-self: center;
  border: 1px solid #bbb;
  padding: 5px 20px;
  border-radius: 8px;
`;
