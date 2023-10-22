import styled from 'styled-components';

export const ModalContainer = styled.div`
  z-index: 1200;
  position: absolute;
`;

export const DialogBox = styled.dialog`
  position: fixed;
  top: 3rem;
  @media screen and (min-width: 768px) {
    width: 50rem;
  }
  @media screen and (max-width: 768px) {
    width: 20rem;
    height: 30rem;
  }
  width: 35rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 1rem;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
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
    content: '✔'; // 체크 모양으로 변경
    background-color: #00ff00; // 체크될 때의 배경색
    color: #ffffff;
    font-size: 12px; // 체크 모양의 크기 조절
    text-align: center;
    line-height: 16px;
    width: 16px;
    height: 16px;
    border: none;
  }
`;

export const Label = styled.label`
  display: inline-block;
  width: 12px; // 체크박스 크기 조절
  height: 12px; // 체크박스 크기 조절
  border: 0.5px solid #000000; // 체크박스 테두리 스타일
  &:active,
  &:focus {
    border: none; // 클릭 또는 포커스 상태일 때 border를 제거
  }
  cursor: pointer; // 포인터 커서
  position: absolute;
  top: 4.5rem;
`;

export const Button = styled.button`
  background-color: #d6cfa5;
  color: #ffffff;
  width: 80%;
`;
