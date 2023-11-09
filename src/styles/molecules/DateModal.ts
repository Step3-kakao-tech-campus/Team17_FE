import styled from 'styled-components';

export const ModalContainer = styled.div`
  z-index: 1200;
  position: absolute;
`;

export const DialogBox = styled.dialog`
  position: fixed;
  top: 27%;
  @media screen and (min-width: 768px) {
    width: 29rem;
    height: 20rem;
  }
  @media screen and (max-width: 768px) {
    width: 85vw;
    height: 20rem;
  }

  width: 35rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  border: none;
  /* justify-content: center; */
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
  background-color: rgba(0, 0, 0, 0.6);
`;

export const MainContainer = styled.div`
  color: black;
  /* width: 90%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > .middle {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TopBanner = styled.div`
  display: flex;
  font-size: 1.1rem;
`;

export const StartContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 1rem 0 1rem 0;
  margin-top: 2.5rem;
  & > .title {
    font-size: 1rem;
    margin-right: 1rem;
  }

  & > .middle {
    margin-left: 1rem;
  }
`;

export const EndContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 2rem 0 1rem 0;

  & > .title {
    font-size: 1rem;
    margin-right: 1rem;
  }

  & > .middle {
    margin-left: 1rem;
  }
`;

export const Button = styled.button`
  background-color: #d6cfa5;
  color: white;
  margin-top: 3rem;

  &:active {
    background-color: #eba059;
  }

  &:focus {
    outline: none;
  }
`;
