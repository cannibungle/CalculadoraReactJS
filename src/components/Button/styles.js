import styled from "styled-components";

export const ButtonStyled = styled.button`
  font-size: 1.4em;
  background-color: #f0f0f0;
  border: none;
  border-right: solid 1px #888;
  border-bottom: solid 1px #888;
  outline: none;

  &:active {
    background-color: #ccc;
  }
`;

export const ButtonDouble = styled(ButtonStyled)`
  grid-column: span 2;
`;

export const ButtonTriple = styled(ButtonStyled)`
  grid-column: span 3;
`;

export const ButtonOperation = styled(ButtonStyled)`
  background-color: #fa8231;
  color: #fff;

  &:active {
    background-color: #fa8231cc;
  }
`;