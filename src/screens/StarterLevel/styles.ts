import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #fff;
  padding: 0 30px;
`;

export const FunnyPhrase = styled.Text`
  font-size: 16px;
  color: #333;
  margin: 50px auto 30px;
`;

export const QuestionText = styled(FunnyPhrase)`
  margin: 0px auto 30px;
  font-weight: bold;
`;

export const LevelArea = styled.View`
  width: 100%;
`;
