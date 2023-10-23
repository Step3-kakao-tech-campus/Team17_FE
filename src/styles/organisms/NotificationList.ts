import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 4rem;
`;

export const AddItemButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  font-size: 0.8rem;
  background-color: transparent;

  .add__item {
    margin-left: 0.3rem;
  }

  &:focus {
    outline: none;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;
