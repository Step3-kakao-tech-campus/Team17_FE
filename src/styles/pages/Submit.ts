import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #a59d52;
  width: 100vw;

  position: relative;
  height: 100vh;

  @media screen and (min-width: 768px) {
    width: 78vw;
    margin: 0 10vw;
  }

  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;

export const Title = styled.h1`
  font-size: 1.7rem;
  color: white;
`;

export const IconWrapper = styled.div`
  background-color: white;
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.4rem;
  margin-bottom: 6rem;
`;

export const Button = styled.button`
  position: absolute;
  bottom: 2rem;
  background-color: white;
  width: 90%;
  border-radius: 25px;
  color: #a59d52;

  &:focus {
    background-color: #eba059;
    color: white;
    outline: none;
  }
`;
