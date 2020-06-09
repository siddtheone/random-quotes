import styled, {createGlobalStyle} from 'styled-components';

export const Global = createGlobalStyle`
  *,*::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Audiowide', cursive;
    font-size: 2em;
  }
`;

export const Screen = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  transition: 0.5s;
  background: ${({bg}) => bg};
  padding: 1em 0;
`;
