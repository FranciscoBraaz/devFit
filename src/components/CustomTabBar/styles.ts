import styled from 'styled-components/native';

export const TabBarArea = styled.SafeAreaView`
  flex-direction: row;
  background-color: #eee;
`;
export const TabBarItem = styled.View`
  flex: 1;
  height: 65px;
  align-items: center;
`;
export const TabBarRegular = styled.TouchableHighlight`
  align-items: center;
  justify-content: center;
  flex: 1;
`;
export const TabImage = styled.Image`
  width: 25px;
  height: 25px;
  margin-top: 10px;
  margin-bottom: 5px;
`;
export const TabBall = styled.TouchableHighlight`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: 5px solid #fff;
  background-color: #3ba237;
  justify-content: center;
  align-items: center;
  margin-top: -50px;
`;
export const TabBallImage = styled.Image`
  width: 40px;
  height: 40px;
`;
