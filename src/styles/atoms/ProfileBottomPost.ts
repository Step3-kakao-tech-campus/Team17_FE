import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 10px;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  background-color: white;
  margin-bottom: 1rem;
  width: 100%;
  cursor: pointer;
  border-bottom: 1px solid lightgray;
  box-shadow: 1px 1px 3px 0px lightgray;
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
    border: 1px solid lightgray;
    border-radius: 20px;
  }
`;

export const StyleContent = styled.div`
  /* flex: 5; */
  text-align: center;
  margin-top: 0.2rem;
  /* margin-top: 0.5rem; */
  & > span {
    display: block;
    margin-top: 0.5rem;
    font-size: 1rem;
    color: #ffffff;
  }
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
    @media screen and (max-width: 768px) {
      font-size: 0.6rem;
    }
  }
  padding-left: 1rem;
`;

export const styleHeader = styled.div`
  display: flex;
  padding-left: 0.9rem;
  padding-top: 0.4rem;
  color: #f84514;
  font-size: 0.8rem;
`;
