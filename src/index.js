import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./styles";
import Calculator from "./main";

ReactDOM.render(
  <>
    <GlobalStyle />
    <h1>Calculadora</h1>
    <Calculator />
  </>,
  document.getElementById("root")
);
