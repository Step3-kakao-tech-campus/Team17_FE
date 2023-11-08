import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  min-height: 700px;
  @media only screen and (max-width: 768px) {
    overflow: hidden;
  }
  box-sizing: border-box;
  background-color: white;

  .onboard__button {
    background-color: #a59d52;
    width: 18rem;
    border-radius: 25px;
    margin: 1rem 0;
    color: white;

    &:hover,
    &:active {
      background-color: #eba059;
    }
  }
`;

export const DogPawWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 15rem;
  margin-top: 2.5rem;

  .dog__paw {
    width: 1.5rem;
  }

  .lignt-color {
    padding-right: 2.5rem;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 24rem;
  width: 17rem;
  border-radius: 160px;
  @media only screen and (max-width: 768px) {
    overflow: hidden;
  }
  background-color: rgba(235, 160, 89, 40%);

  .image__cloud {
    padding-bottom: 3rem;
  }

  .image__pin {
    position: absolute;
    padding-top: 4rem;
    width: 4.3rem;
  }

  .image__pin2 {
    position: absolute;
    width: 4.3rem;
    padding-left: 16rem;
    padding-bottom: 14rem;
  }

  .image__walking {
    width: 7.8rem;
    padding: 0 5rem;
  }

  .image__tree {
    position: absolute;
    padding-top: 8rem;
    width: 3rem;
  }

  .image__big-paw {
    position: absolute;
    padding-top: 10rem;
    width: 6rem;
    padding-left: 11.7rem;
    overflow-x: hidden;
  }

  .image__bench {
    position: absolute;
    padding-top: 10rem;
    width: 5rem;
  }
`;

export const Description = styled.div`
  margin-top: 2.5rem;
  font-size: 1.1rem;
  white-space: pre-wrap;
  text-align: center;
  line-height: 30px;
  color: #a59d52;
  margin-bottom: 10rem;
`;
