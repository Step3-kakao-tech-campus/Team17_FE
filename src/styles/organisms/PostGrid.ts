import styled from 'styled-components';
export const Container = styled.div`
  background-color: transparent;
`;

export const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    flex: 1;
    width: calc(33.33% - 10px);
    border: none;
    text-align: center;
    border-radius: 0;
    cursor: pointer;
    outline: none;
  }
  button.active {
    font-family: 'Gowun';
    border-bottom: 1px solid #000;
  }
`;

export const ListContainer = styled.div`
  margin: 1rem;
  flex-direction: column;
  gap: 1rem;
`;

export const Button = styled.button`
  border-radius: 20px;
  height: 4rem;
  width: 100%;
  display: flex;
  margin-bottom: 1rem;
  border: 1px solid #e2e2e2;
  justify-content: center;
  align-items: center;
`;
