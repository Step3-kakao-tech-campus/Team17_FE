import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 20px;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d6cfa5;
  margin-bottom: 1rem;
  width: 95%;
  cursor: pointer;
`;
export const StyleContent = styled.div``;

export const ArrowContent = styled.div`
  padding-right: 1rem;
  cursor: pointer;
`;

export const StyleTitle = styled.div`
  & > span {
    font-family: 'Gowun';
    font-size: 0.8rem;
    color: #000000;
  }
  padding-left: 1rem;
  display: flex;
`;

export const styleHeader = styled.div`
  display: flex;
  padding-left: 1rem;
  padding-top: 0.4rem;
  color: white;

  font-size: 0.9rem;
`;
