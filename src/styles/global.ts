import { createGlobalStyle } from "styled-components";
import Bg from "../assets/bg.png";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Sofia Sans, sans-serif;
    transition: 0.2s;
  }
  body{
    background: #424242 url(${Bg})
  }
  a{
    color: #000;
    text-decoration: none;
  }
`;
