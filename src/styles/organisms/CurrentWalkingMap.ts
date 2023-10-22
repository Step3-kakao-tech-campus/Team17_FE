import styled from 'styled-components';

export const Container = styled.main`
  position: relative;
  height: 100%;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    width: 78vw;
    margin: 0 10vw;
  }

  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;

export const BackCursor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 2rem;
  left: 2rem;
  z-index: 100;
  border: 1px solid #e5e5e5;
  cursor: pointer;
`;

export const BottomBox = styled.div`
  background-color: #d6cfa5;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  z-index: 100;
  width: 100%;
  height: 5rem;
`;

export const Button = styled.button`
  width: 80%;
  border-radius: 25px;
  color: #a59d52;
  background-color: white;
  font-family: 'Gowun';
  box-shadow: 0px 3px 0px 0px #969696;
  &:focus {
    outline: none;
  }
  &:active {
    background-color: #eba059;
    color: white;
  }
`;
