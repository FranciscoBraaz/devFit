import styled from 'styled-components/native';

interface ModalMuscleProps {
  opacity: number;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 20px;
`;

export const NameInput = styled.TextInput`
  width: 100%;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
  padding: 10px;
`;

export const SaveButtonArea = styled.TouchableHighlight`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
`;

export const SaveButtonImage = styled.Image`
  width: 25px;
  height: 25px;
`;

export const ButtonText = styled.TextInput`
  color: #fff;
  font-size: 16px;
`;

export const ExercisesArea = styled.View`
  flex: 1;
  margin-top: 20px;
  padding-top: 20px;
  border-top-width: 1px;
  border-top-color: #ccc;
`;

export const ExercisesList = styled.FlatList`
  flex: 1;
  padding-top: 20px;
`;

export const ModalLabel = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-top: 10px;
`;

export const ModalMuscles = styled.ScrollView``;

export const ModalMuscle = styled.TouchableHighlight<ModalMuscleProps>`
  width: 50px;
  height: 50px;
  background-color: #eee;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  opacity: ${props => props.opacity};
`;

export const ModalMuscleImage = styled.Image`
  width: 35px;
  height: 35px;
`;

export const ModalInput = styled.TextInput`
  width: 100%;
  font-size: 14px;
  color: #333;
  height: 40px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

export const ModalNumericArea = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ModalNumericItem = styled.View`
  align-items: center;
`;
