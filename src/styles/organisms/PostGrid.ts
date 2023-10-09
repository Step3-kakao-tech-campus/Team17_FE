import styled from 'styled-components';
export const Container = styled.div`
  background-color: white;
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
    font-weight: bold;
    border-bottom: 1px solid #000;
  }
`;

export const ListContainer = styled.div`
  margin: 1rem;
  flex-direction: column;
  gap: 1rem;
`;
