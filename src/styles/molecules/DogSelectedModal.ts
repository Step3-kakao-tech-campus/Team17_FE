import styled from 'styled-components';

export const ModalContainer = styled.div`
  z-index: 1200;
  position: absolute;
`;

export const DialogBox = styled.dialog`
  position: fixed;
  top: 20%;
  @media screen and (min-width: 768px) {
    width: 40rem;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    height: 30rem;
  }
  width: 35rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  /* border-radius: 1rem; */
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
  transition: all 400ms ease-in-out 2s;
  animation: fadeIn 400ms;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.5);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const CancelButton = styled.div`
  text-align: right;
  width: 100%;
  color: black;
  height: 2rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DogContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  margin-right: 1rem;
  & > .dog {
    height: 4rem;
    width: 4rem;
    text-align: center;
  }

  & > .dog > span {
    color: black;
  }
`;

export const Input = styled.input`
  position: absolute;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;

  &:checked + label::before {
    content: '✔';
    background-color: #00ff00;
    color: #ffffff;
    font-size: 0.7rem;
    text-align: center;

    border: none;
  }
`;

export const Label = styled.label`
  display: inline-block;
  width: 0.8rem; // 체크박스 크기 조절
  height: 0.8rem; // 체크박스 크기 조절
  border: 0.5px solid #e2e2e2; // 체크박스 테두리 스타일
  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 0.8rem;
    font-size: 0.8rem;
    color: #ffffff;
    background-color: #ffffff;
    border: none;
  }
  cursor: pointer;
  position: absolute;
  top: 4.5rem;
`;

export const Button = styled.button`
  background-color: #d6cfa5;
  color: #ffffff;
  width: 80%;

  &:active {
    background-color: #eba059;
  }
`;
