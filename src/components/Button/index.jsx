import React from "react";
import {
  ButtonStyled,
  ButtonDouble,
  ButtonTriple,
  ButtonOperation,
} from "./styles";

export const Button = (props) => <ButtonStyled onClick={() => props.click(props.label)}>{props.label}</ButtonStyled>;
export const Double = (props) => <ButtonDouble onClick={() => props.click(props.label)}>{props.label}</ButtonDouble>;
export const Triple = (props) => <ButtonTriple onClick={() => props.click(props.label)}>{props.label}</ButtonTriple>;
export const Operation = (props) => <ButtonOperation onClick={() => props.click(props.label)}>{props.label}</ButtonOperation>;
