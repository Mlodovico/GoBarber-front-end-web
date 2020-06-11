import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  color: #666360;

  border: 2px solid #232129;
  margin-top: 8px;

  & + div {
    margin-top: 8px;
  }

  ${props => props.isFocused && css`
    color: #ff9000;
    border-color: #ff9000;
    transition: border-color 1.0s;
  `}

  ${props => props.isFilled && css`
    color: #ff9000;
    transition: border-color 1.0s;
  `}

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #F4EDE8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
