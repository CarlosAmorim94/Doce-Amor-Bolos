import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    transition: all ease .5s;
    text-decoration: none;
}
    
  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }
`;
