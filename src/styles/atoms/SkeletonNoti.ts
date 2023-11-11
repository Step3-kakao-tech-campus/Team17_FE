import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  button {
    margin-top: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid lightgray;
    background-color: #f9f9f9;
    height: 2.2rem;
    width: 100%;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 4rem;
`;

export const ListItem = styled.div`
  border-radius: 15px;
  height: 3rem;
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
