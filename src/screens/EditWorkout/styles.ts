import styled from 'styled-components/native';

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
