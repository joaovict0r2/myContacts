import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
  }

  body {
    background: ${({ theme }) => theme.backgroundColor};
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;
