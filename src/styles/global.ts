import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body {
      -webkit-font-smoothing: antialiased;
      background: #fff;
      overflow-x: 
  }

  body, input, textarea, button {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.43;
      letter-spacing: 0.01071em;
  }

  h1, h2, h3, h4, h5, h6, strong {
      font-weight: 500;
  }

  button {
      cursor: pointer;
  }

  [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
  }
`;
