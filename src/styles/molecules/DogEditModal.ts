import styled from 'styled-components';

export const ModalContainer = styled.div`
  z-index: 1500;
  position: absolute;
`;

export const DialogBox = styled.dialog`
  position: fixed;
  top: 10%;
  @media screen and (max-width: 768px) {
    width: 80vw;
    height: 35rem;
    top: 15%;
  }
  width: 30rem;
  height: 32rem;
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

export const CancelButton = styled.div`
  text-align: right;
  width: 100%;
  cursor: pointer;
`;

export const Button = styled.button`
  position: absolute;
  bottom: 1rem;
  width: 91%;
  background-color: #f6ba26;
  color: white;
  border-radius: 1rem;
  outline: none !important;

  &:active {
    background-color: #eba059;
  }
`;

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const MainContainer = styled.div`
  color: black;
  display: flex;
  width: 100%;
  justify-content: start;
  align-items: center;
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
  margin-left: 0.8rem;
  width: 70%;
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
  & > div {
    padding-bottom: 1rem;
    font-size: 1.2rem;
  }

  & > textarea {
    &:focus {
      outline: none;
    }
    white-space: pre-line;
    resize: none;

    &::-webkit-scrollbar {
      visibility: hidden;
    }
  }
`;

export const Input = styled.input`
  border: none;
  width: 60%;
  background-color: white;
  color: black;
  &:focus {
    outline: none;
  }
`;

export const ImageContainer = styled.div`
  width: 7rem;
  height: 7rem;
  cursor: pointer;
  /* display: flex; */
  & > .input-file-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1 rem;
    background-color: #d6cfa5;
    border-radius: 4px;
    color: white;
    cursor: pointer;
  }
`;
