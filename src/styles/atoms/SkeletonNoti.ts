import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  button {
    display: flex;
    justify-content: center;
    width: 100%;
    border: none;
    text-align: center;
    border-radius: 0;
    outline: none;
  }
  button.active {
    font-family: 'Gowun';
    border-bottom: 1px solid #000;
  }
`;

export const ListContainer = styled.div`
  border-radius: 15px;
  height: 3.5rem;
  margin-top: 1rem;
  width: 95%;

  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: wave 2s linear infinite;

  @keyframes wave {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: -100% 0;
    }
  }
`;
