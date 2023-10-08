import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  @media only screen and (max-width: 768px) {
    overflow: hidden;
  }
  box-sizing: border-box;
  background-color: white;

  .dog__paw {
    width: 1.5rem;
    position: absolute;
  }
`;

export const ImgContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 25rem;
  width: 18rem;
  border-radius: 160px;
  @media only screen and (max-width: 768px) {
    overflow: hidden;
  }
  background-color: rgba(235, 160, 89, 40%);

  .image__cloud {
    padding-bottom: 4rem;
  }

  .image__pin {
    position: absolute;
    padding-top: 4rem;
    width: 5rem;
  }

  .image__dog {
  }
`;

export const Description = styled.div`
  margin-top: 4rem;
  font-size: 1.3rem;
  white-space: pre-wrap;
  text-align: center;
  line-height: 30px;
  color: #a59d52;
`;
