import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  body {
    background: ${({ theme }) => theme.gray100};
    color: ${({ theme }) => theme.gray600};
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {

    font-weight: 400;
    font-size: 16px;
  }
  button {
    cursor: pointer;
    border:none;
  }

  a {
    text-decoration: none;
  }
  `;