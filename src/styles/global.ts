import styled from 'styled-components/native';

interface DefaultButtonProps {
  width?: string;
  bgColor?: string;
  padding?: string;
}

export const DefaultButton = styled.TouchableHighlight<DefaultButtonProps>`
  width: ${props => props.width || 'auto'};
  background-color: ${props => props.bgColor || '#eee'};
  padding: ${props => props.padding || '10px 20px'};
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;
