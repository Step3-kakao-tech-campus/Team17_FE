import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 20px;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  background-color: #d6cfa5;
  margin-bottom: 1rem;
  width: 95%;
  cursor: pointer;
`;

export const PictureContainer = styled.div`
  flex: 6;
  width: 1rem;
  height: 1rem;
  text-align: center;
  display: flex;
  margin-top: 0.5rem;
  margin-left: 1rem;
  & > .img {
    width: 3rem;
    height: 3rem;
    display: flex;
  }
`;

export const StyleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const ArrowContent = styled.div`
  margin-top: 1rem;
  padding-right: 2rem;
  cursor: pointer;
`;

export const StyleTitle = styled.div`
  & > span {
    font-family: 'Gowun';
    font-size: 0.7rem;
    color: #000000;
  }
  padding-left: 1rem;
`;

export const styleHeader = styled.div`
  display: flex;
  padding-left: 1rem;
  padding-top: 0.4rem;
  color: white;
  font-size: 0.9rem;
`;
