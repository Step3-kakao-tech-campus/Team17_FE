import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 20px;
  height: 4rem;
  display: flex;
  background-color: #d6cfa5;
  margin-bottom: 1rem;
  width: 100%;
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
    justify-content: center;
    align-items: center;
  }
  /* margin: 10px 10px 10px 20px; */
  /* margin: px; */
  /* text-align: center; */
`;

export const StyleContent = styled.div`
  /* flex: 5; */
  text-align: center;
  margin-left: 1rem;
  /* margin-top: 0.5rem; */
  & > span {
    display: block;
    margin-top: 0.5rem;
    font-size: 1rem;
    color: #ffffff;
  }
`;

export const ArrowContent = styled.div`
  flex: 1;
  margin-top: 1rem;
  cursor: pointer;
`;

export const StyleTitle = styled.div`
  & > span {
    font-family: 'Gowun';
    font-size: 0.8rem;
    color: #000000;
  }
`;
