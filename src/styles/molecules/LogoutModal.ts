import styled from 'styled-components';

export const ModalContainer = styled.div`
  z-index: 5000;
  position: absolute;
`;

export const DialogBox = styled.dialog`
  position: fixed;
  top: 32%;
  @media screen and (max-width: 768px) {
    width: 60vw;
    height: 12rem;
  }

  width: 16rem;
  height: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  /* border-radius: 1rem; */
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  border-radius: 5px;
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
  /* padding: 2rem; */
  color: black;
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

  & > .login {
    margin: 1rem 0;
    font-size: 1.2rem;
  }
  & > .login_req {
    font-size: 0.8rem;
  }
`;

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`;

export const Input = styled.input`
  border: none;
  &:focus {
    outline: none;
  }
`;

export const CancelButton = styled.button`
  margin-top: 1rem;
  margin-right: 0.5rem;
  background-color: #ffffff;
  font-size: 0.7rem;
  color: black;
  width: 4.5rem;
  border-radius: 0.6rem;
  border: 1px solid #e2e2e2;
  outline: none !important;
  &:active {
    background-color: #f6ba26;
  }
`;
export const LogoutButton = styled.button`
  margin-top: 1rem;
  background-color: #f6ba26;
  font-size: 0.7rem;
  color: white;
  border-radius: 0.6rem;
  width: 4.5rem;
  outline: none !important;
  &:active {
    background-color: #eba059;
  }
  &:focus {
    outline: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
`;
