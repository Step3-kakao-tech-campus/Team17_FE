import styled from 'styled-components';

export const ModalContainer = styled.div`
  z-index: 1500;
  position: absolute;
`;

export const DialogBox = styled.dialog`
  position: fixed;
  top: 3rem;
  @media screen and (min-width: 768px) {
    width: 50rem;
  }
  width: 20rem;
  height: 30rem;
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

export const CancelButton = styled.div`
  text-align: right;
  width: 100%;
`;

export const Button = styled.button`
  margin-top: 0.3rem;
  width: 90%;
  background-color: #a59d52;
  color: white;
  border-radius: 1rem;
  outline: none !important;
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

export const MainContainer = styled.div`
  color: black;
  display: flex;
  width: 90%;
  justify-content: start;
  & > .pen {
    position: relative;
    top: 6rem;
    right: 1rem;
  }
  .image {
    @media screen and (max-width: 768px) {
      width: 1rem;
      height: 2rem;
    }
    @media screen and (min-width: 768px) {
      width: 4.5rem;
      height: 2rem;
    }
    width: 1rem;
    height: 1rem;
  }
`;
export const DogInfo = styled.div`
  margin-left: 1rem;
  font-size: 0.8rem;
  & > div.block {
    border-bottom: 1px solid #d3d3d3;
    padding-bottom: 0.4rem;
    display: flex;
    align-items: center;
    height: 2.5rem;
  }
  & > div > span.title {
    color: #a59d52;
    margin-right: 1rem;
  }
`;

export const UniqueInfo = styled.div`
  color: black;
  width: 90%;
  @media screen and (min-width: 768px) {
    height: 12rem;
  }
  height: 7rem;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  & > div {
    margin-bottom: 0.3rem;
    font-size: 1.4rem;
  }
`;

export const Input = styled.input`
  border: none;
  width: 60%;
  &:focus {
    outline: none;
  }
`;

export const ImageContainer = styled.div`
  width: 8rem;
  height: 8rem;
  /* display: flex; */
  & > .input-file-button {
    padding: 6px 25px;
    background-color: #d6cfa5;
    border-radius: 4px;
    color: white;
    cursor: pointer;
  }
`;
