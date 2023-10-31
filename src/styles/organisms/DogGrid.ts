import styled from 'styled-components';
export const Container = styled.div`
  padding-left: 1rem;
  padding-bottom: 1rem;

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
    border: 1px solid #c7c7cc;
    border-radius: 50%;
    height: 4.5rem;

    &:active {
      outline: none;
    }
  }
`;

export const DogItem = styled.span`
  width: 4.5rem;
`;
