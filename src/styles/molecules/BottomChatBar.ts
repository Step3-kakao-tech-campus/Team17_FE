import styled from 'styled-components';

export const Input = styled.input`
  margin-right: 1rem;
  padding: 0.5rem 18rem 0.5rem 0.5rem; // 수정해야함 패딩 ㅎㅎ..
  background-color: #d6cfa5;
  border-radius: 20px;
  border-color: transparent;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ContainerFluid = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  z-index: 100;
  height: 4rem;

  @media screen and (min-width: 768px) {
    width: 80%;
    margin: 0 10%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
