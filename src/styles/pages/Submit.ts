import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f6ba26;
  width: 100vw;

  position: relative;
  height: 100vh;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;

export const Title = styled.h1`
  font-size: 1.7rem;
  color: white;
  font-family: 'Gowun';
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
  color: #f6ba26;
  font-family: 'Gowun';

  &:active {
    background-color: #eba059;
    color: white;
  }

  &:focus {
    outline: none;
  }
`;
