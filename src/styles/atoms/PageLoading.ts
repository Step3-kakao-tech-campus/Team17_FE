import styled from 'styled-components';

export const Container = styled.div`
  z-index: 1200;
  position: absolute;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  inset: 0px;
  display: flex;
  background-color: rgba(0, 0, 0, 71%);
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #d6cfa5;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
