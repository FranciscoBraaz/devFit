import styled from 'styled-components/native';

export const ExercisesItemArea = styled.TouchableHighlight`
  height: 50px;
  flex-direction: row;
  background-color: #fff;
  margin-bottom: 10px;
`;

export const ExercisesMuscleArea = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: #ffcc98;
  justify-content: center;
  align-items: center;
`;

export const ExerciseMuscleImage = styled.Image`
  width: 35px;
  height: 35px;
`;

export const ExerciseInfo = styled.View`
  flex-direction: column;
  justify-content: center;
  margin-left: 5px;
`;

export const ExerciseName = styled.Text`
  font-size: 15px;
  color: #000;
`;

export const ExerciseDetails = styled.Text`
  font-size: 12px;
  color: #999;
`;
