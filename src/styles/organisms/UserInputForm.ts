import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media only screen and (max-width: 768px) {
    overflow: hidden;
  }

  .welcome__text {
    margin: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.2em;
  margin-bottom: 0.8em;
  font-family: 'Gowun';
`;

export const Box = styled.form`
  border: 1px solid #d8d8d8;
  padding: 2.5rem 4rem;
  @media only screen and (max-width: 768px) {
    border-width: 0;
    padding-right: 0;
    padding-left: 0;
  }

  .go__no-member {
    color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    font-size: 0.9rem;
  }

  .go__no-member:focus,
  .go__no-member:hover {
    color: black;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => (props.disabled ? '#FCE4A8' : '#f6ba26')};

  border-radius: 20px;
  width: 25.5rem;
  height: 2.7rem;
  margin-top: 1.5rem;
  font-size: 1rem;
  color: ${(props) => (props.disabled ? '#8c8c8c' : 'white')};
  &:active {
    background-color: #f84514;
    color: white;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }

  @media only screen and (max-width: 768px) {
    width: 81.5vw;
    margin-left: 10vw;
    margin-right: 10vw;
  }
  pointer-events: ${(props) => (props.disabled ? 'none' : null)};
`;
