import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 20px;
  height: 5rem;
  display: flex;
  background-color: #d6cfa5;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const PictureContainer = styled.div`
  flex: 1;
  width: 1rem;
  height: 1rem;
  margin: 10px 10px 10px 20px;
  /* margin: px; */
  /* text-align: center; */
`;

export const StyleContent = styled.div`
  flex: 5;
  margin: 10px 0 10px 0;
  & > span {
    display: block;
    margin-top: 0.5rem;
    font-size: 1rem;
    color: #ffffff;
  }
`;

export const ArrowContent = styled.div`
  margin: 25px 0 25px 0;
  flex: 1;
  cursor: pointer;
`;

export const StyleTitle = styled.div`
  & > span {
    font-weight: bold;
    font-size: 0.8rem;
    color: #000000;
  }
`;
