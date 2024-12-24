import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body{
    background-color: ${(props) => props.theme.white}
  }

  :focus-visible{
    outline: none;
    box-shadow: 0px 0px 2px 1px ${(props) => props.theme.blue[500]};
  }

  body, input, button, select, textarea{
    font-size: 16px;
    border: none;
    font-family: 'Roboto', sans-serif;
  }
`;
