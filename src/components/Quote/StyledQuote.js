import styled from 'styled-components';

const StyledQuote = styled.main`
  padding: 1em;
  text-align: center;
  background: white;
  max-width: min(90%, 900px);
  border-radius: 10px;
  color: ${({text}) => text};

  .buttons__row {
    display: flex;
    justify-content: space-between;
  }

  .buttons, .links {
    color: ${({text}) => text};
    font-size: 2rem;
    font-family: 'Audiowide', cursive;
    transition: 0.5s;
    outline: none;
    cursor: pointer;
  }

  .buttons {
    background: none;
    border: 2px solid ${({text}) => text};
    box-shadow: 0px 0px 5px ${({text}) => text};
    border-radius: 10px;
    &:active {
      transform: scale(1.05);
      border: 2px solid ${({text}) => text};
    }
  }

  .links {
    text-shadow: 0px 0px 5px ${({text}) => text};
    margin-right: .5em;
  }
`;

export default StyledQuote;
