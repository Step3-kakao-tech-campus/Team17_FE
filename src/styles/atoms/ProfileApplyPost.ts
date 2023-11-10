import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 10px;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  margin-bottom: 1rem;
  width: 100%;
  cursor: pointer;
  border-bottom: 1px solid lightgray;
  box-shadow: 1px 1px 3px 0px lightgray;
`;
export const StyleContent = styled.div``;

export const ArrowContent = styled.div`
  padding-right: 1rem;
  cursor: pointer;
`;

export const StyleTitle = styled.div`
  & > span {
    font-size: 0.8rem;
    color: #000000;
  }
  padding-left: 1rem;
  display: flex;
`;

export const styleHeader = styled.div`
  display: flex;
  font-family: 'Gowun';
  padding-left: 1rem;
  padding-top: 0.4rem;
  color: black;

  font-size: 0.9rem;
`;
