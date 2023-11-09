import styled from 'styled-components';
export const SkeletonContainer = styled.div`
  margin-left: 0.5rem;
  /* width: 20rem;
  height: 3em;  */
  display: flex;
  margin: 1rem;
  /* justify-content: center; */
  /* align-items: center; */
  margin-top: 0.5rem;
`;

export const SkeletonBox = styled.div`
  background-color: #e2e2e2;
  width: 17rem;
  height: 2rem;
  margin-left: 0.2rem;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: wave 2s linear infinite;

  @keyframes wave {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: -100% 0;
    }
  }
`;
export const ItemProfileImgWrapper = styled.span`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-color: #dadada;
  margin-left: 0.6rem;
  display: inline-block;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: wave 2s linear infinite;

  @keyframes wave {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: -100% 0;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  /* height: 20rem; */
  align-items: center;
  margin-top: 1.5rem;
  padding-left: 1rem;
`;

export const TextContainer = styled.div``;
