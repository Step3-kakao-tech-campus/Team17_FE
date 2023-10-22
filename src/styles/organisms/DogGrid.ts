import styled from 'styled-components';
export const Container = styled.div`
  margin: 0 0 1rem 1rem;

  & > h1 {
    font-size: 1.5rem;
  }
`;

export const DogsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 20px;
  cursor: pointer;
  & > button {
    outline: none;
  }
`;
