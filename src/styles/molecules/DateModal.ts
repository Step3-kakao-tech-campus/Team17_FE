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
  border: none;
  /* border-radius: 1rem; */
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
  background-color: rgba(0, 0, 0, 0.6);
`;

export const MainContainer = styled.div`
  color: black;
  /* width: 90%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TopBanner = styled.div`
  display: flex;
  font-size: 1.2rem;
`;

export const DateContainer = styled.div``;

export const TimeContainer = styled.div``;

export const Button = styled.button``;
