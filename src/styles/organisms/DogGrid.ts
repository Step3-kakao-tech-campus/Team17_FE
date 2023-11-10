import styled from 'styled-components';
export const Container = styled.div`
  padding-left: 1rem;
  padding-bottom: 1rem;

  & > h1 {
    font-size: 1.3rem;
  }
`;

export const DogsContainer = styled.div`
  display: flex;
  gap: 1rem;
  transform: translate(0, 0);
  margin-top: 0.8rem;
  cursor: pointer;
  flex-wrap: nowrap;
  overflow-x: auto;
  & > button {
    border: 1px solid #c7c7cc;
    background-color: #f9f9f9;
    border-radius: 25px;
    height: 4rem;
    margin-left: 1rem;
    z-index: 1200;

    &:active {
      outline: none;
    }
  }
  & > .btn {
    background-color: white;
  }

  .swiper-slide {
    display: flex;
    width: 4rem;
    z-index: -1;
  }
`;

export const DogItem = styled.span`
  width: 4rem;
  height: 4rem;
  border: 1px solid #e2e2e2;
  border-radius: 25px;
  z-index: 1200;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled.div``;
