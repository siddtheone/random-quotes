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
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  transition: 0.5s;
  background: ${({bg}) => bg}
`;
