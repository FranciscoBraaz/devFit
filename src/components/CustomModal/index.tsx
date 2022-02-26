import React from 'react';
import {Modal, Platform} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  CloseText,
  ModalBody,
  ModalBox,
  ModalBoxArea,
  ModalClose,
  ModalHeader,
  ModalTitle,
} from './styles';

export function CustomModal({isVisible, title, children, onClose}: any) {
  return (
    <Modal visible={isVisible} transparent={true} animationType="fade">
      <ModalBoxArea behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        {/* <ScrollView
          style={{flex: 1}}
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
          bounces={false}
          showsVerticalScrollIndicator={false}> */}
        <ModalBox>
          <ModalHeader>
            <ModalTitle>{title}</ModalTitle>
            <ModalClose onPress={onClose} underlayColor="transparent">
              <CloseText>X</CloseText>
            </ModalClose>
          </ModalHeader>

          <ModalBody>{children}</ModalBody>
        </ModalBox>
        {/* </ScrollView> */}
      </ModalBoxArea>
    </Modal>
  );
}
