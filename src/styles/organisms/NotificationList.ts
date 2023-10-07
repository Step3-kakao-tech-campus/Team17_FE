import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 4rem; /* 하단 바의 높이만큼 여백을 추가합니다. */
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
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;
