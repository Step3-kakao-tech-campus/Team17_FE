import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  width: 100vw;
  @media only screen and (max-width: 768px) {
    overflow: hidden;
  }

  .welcome__text {
    margin: 1rem;
  }

  .go__no-member {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    font-size: 0.9rem;
    color: inherit;
  }
`;

export const Title = styled.h1`
  font-size: 1.2em;
  margin-bottom: 0.8em;
  font-weight: normal;
`;

export const Box = styled.div`
  border: 1px solid #d8d8d8;
  padding: 2rem;
  @media only screen and (max-width: 768px) {
    border-width: 0;
    padding-right: 0;
    padding-left: 0;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => (props.disabled ? '#d6cfa5' : '#a59d52')};
  border: ${(props) =>
    props.disabled ? '1px solid #c8c8c8' : '1px solid #a59d52'};
  border-radius: 20px;
  width: 25.5rem;
  height: 2.7rem;
  margin-top: 1.5rem;
  font-size: 1rem;
  color: ${(props) => (props.disabled ? '#8c8c8c' : 'white')};
  &:hover,
  &:active {
    background-color: #eba059;
    color: white;
    cursor: pointer;
    border: none;
  }

  @media only screen and (max-width: 768px) {
    width: 81.5vw;
    margin-left: 10vw;
    margin-right: 10vw;
  }
  pointer-events: ${(props) => (props.disabled ? 'none' : null)};
`;
