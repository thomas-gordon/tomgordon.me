import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font: 18px/150% 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font: 18px/150% 'Crimson Text', 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }
`;
