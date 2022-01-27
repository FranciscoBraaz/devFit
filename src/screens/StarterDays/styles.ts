import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #fff;
  padding: 0 30px;
`;

export const HeaderText = styled.Text`
  font-size: 16px;
  color: #333;
  margin: 50px auto 30px;
`;

export const HeaderSubtext = styled(HeaderText)`
  margin: 0px auto 30px;
`;

export const BoldText = styled.Text`
  font-weight: bold;
`;

export const DaysArea = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
