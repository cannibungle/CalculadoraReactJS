import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'RobotoMono';
  src: url('/fonts/RobotoMono-Thin.ttf');
}

*{
  font-family: 'RobotoMono', monospace;
}

body{
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: #fff;
  background: linear-gradient(to right, rgb(83,105,118), rgb(41, 46, 73));
}
`;

export default GlobalStyle;