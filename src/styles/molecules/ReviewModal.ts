import styled from 'styled-components';

export const ModalContainer = styled.div`
  z-index: 1200;
  position: absolute;
`;

export const DialogBox = styled.dialog`
  position: fixed;
  top: 5rem;
  @media screen and (min-width: 768px) {
    width: 35rem;
    height: 20rem;
  }
  @media screen and (max-width: 768px) {
    width: 30rem;
    height: 24rem;
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

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  & > span {
    font-size: 1.2rem;
  }
`;

export const ReviewContainer = styled.div``;
