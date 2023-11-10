import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0.8rem 0;
  cursor: pointer;
  margin: 0 0.5rem;
  padding-left: 0.6rem;
  color: black;

  @media screen and (min-width: 768px) {
    padding-left: 3rem;
  }
`;

export const ListProfileImgWrapper = styled.span`
  margin-right: 0.6rem;
  width: 4rem;
  height: 4rem;
  border-radius: 27px;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
`;

export const ListLocationWrapper = styled.div`
  display: inline-block;
`;

export const ListDogText = styled.span`
  font-size: 0.8rem;
  padding-right: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: start;

  & > span {
    margin-left: 0.3rem;
  }

  .dog__bowl {
    color: #f05423;
    margin-right: 0.3rem;
    font-family: 'Gowun';
  }
`;

export const ListTitle = styled.div`
  font-size: 0.8rem;
  font-family: 'Gowun';
`;

export const TextWrapper = styled.div`
  line-height: 1.6rem;
`;
