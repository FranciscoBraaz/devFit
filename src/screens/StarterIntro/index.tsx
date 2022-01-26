import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {DefaultButton} from '../../styles/global';
import {
  BeginConfigArea,
  Container,
  ButtonText,
  WelcomeImage,
  WelcomeLogo,
  WelcomeText,
} from './styles';

export default function StarterIntro() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('StarterName');
  }

  return (
    <Container>
      <WelcomeText>Bem vindo(a) ao DevFit</WelcomeText>
      <WelcomeImage>
        <WelcomeLogo source={require('../../assets/boneco.png')} />
      </WelcomeImage>
      <BeginConfigArea>
        <DefaultButton
          width="100%"
          bgColor="#0072C0"
          underlayColor="#0B7AC6"
          onPress={handleStart}>
          <ButtonText>Iniciar configuração</ButtonText>
        </DefaultButton>
      </BeginConfigArea>
    </Container>
  );
}
