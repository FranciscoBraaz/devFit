import styled from 'styled-components/native';

export const BallonTriangle = styled.View`
  width: 0;
  height: 0;
  border-left-width: 15px;
  border-left-color: transparent;
  border-right-width: 15px;
  border-right-color: transparent;
  border-bottom-width: 15px;
  border-bottom-color: #ededed;
`;

export const BalloonArea = styled.View`
  width: 90%;
  padding: 20px;
  background-color: #ededed;
  border-radius: 10px;
`;

export const BalloonBigText = styled.Text`
  font-size: 15px;
  align-self: center;
  color: #000;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const BallonSmallText = styled.Text`
  font-size: 13px;
  align-self: center;
  margin-top: 10px;
  color: #000;
`;

export const Strong = styled.Text`
  font-weight: bold;
`;
