import styled from 'styled-components';

export const ModalContainer = styled.div`
  z-index: 1300;
  position: absolute;
`;

export const DialogBox = styled.dialog`
  position: fixed;
  top: 13%;
  @media screen and (max-width: 768px) {
    width: 80vw;
    height: 35rem;
    top: 13%;
  }

  width: 30rem;
  height: 34rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  /* border-radius: 1rem; */
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
  & > .img {
    width: 5rem;
    height: 5rem;
  }
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
export const ProfileContainer = styled.div`
  width: 85%;
  color: black;
  & > div.block {
    width: 100%;
    border-bottom: 1px solid #d3d3d3;
    padding-bottom: 0.4rem;
    margin-top: 0.4rem;
    align-items: center;
  }
  & > div.special {
    margin-top: 1rem;
  }

  & > div > span.title {
    color: #a59d52;
    margin-right: 1rem;
    margin-top: 0.1rem;
  }
  & > div.special > span {
    font-size: 1.2rem;
  }

  & > .block {
    display: flex;
    height: 1.7rem;
  }
`;
export const Button = styled.button`
  margin-top: 0.3rem;
  width: 100%;
  background-color: #f6ba26;
  color: white;
  border-radius: 1rem;
  outline: none !important;
  &:active {
    background-color: #eba059;
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

export const Input = styled.input`
  border: none;
  &:focus {
    outline: none;
  }
`;
