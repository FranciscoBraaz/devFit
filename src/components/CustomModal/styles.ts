import styled from 'styled-components/native';

export const ModalBoxArea = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalBox = styled.View`
  width: 90%;
  padding: 20px;
  background-color: #fff;
`;

export const ModalClose = styled.TouchableHighlight`
  height: 40px;
  align-self: flex-end;
`;

export const CloseText = styled.Text`
  font-size: 25px;
  color: #000;
`;

export const ModalBody = styled.View``;
