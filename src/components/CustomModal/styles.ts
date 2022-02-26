import styled from 'styled-components/native';

export const ModalBoxArea = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalBox = styled.View`
  width: 90%;
  padding: 10px 20px 20px 20px;
  background-color: #fff;
`;

export const ModalHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  margin-bottom: 10px;
`;

export const ModalTitle = styled.Text`
  color: #000;
  font-size: 25px;
`;

export const ModalClose = styled.TouchableHighlight`
  align-self: flex-end;
`;

export const CloseText = styled.Text`
  font-size: 25px;
  color: #000;
`;

export const ModalBody = styled.View``;
