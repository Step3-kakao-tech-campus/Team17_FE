import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f84514;
  font-size: 6rem;
  font-family: sans-serif, Verdana, Geneva, Tahoma;
  font-weight: bold;
  border-bottom: 1px solid lightgray;
`;

export const Content = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  margin-bottom: 3rem;
`;

export const Button = styled.button`
  background-color: #f6ba26;
  width: 15rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  &:active {
    background-color: #eba059;
  }

  &:focus {
    outline: none;
  }
`;
