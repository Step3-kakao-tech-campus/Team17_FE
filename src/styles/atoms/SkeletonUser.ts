import styled from 'styled-components';
export const SkeletonContainer = styled.div`
  margin-left: 0.5rem;
  /* width: 20rem;
  height: 3em;  */
  display: flex;
  margin: 1rem;
  /* justify-content: center; */
  /* align-items: center; */
`;

export const SkeletonBox = styled.div`
  background-color: #e2e2e2;
  width: 13rem;
  height: 1.4rem;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
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
  padding-top: 1rem;
  width: 100%;
  display: flex;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const TextContainer = styled.div`
  margin-top: 0.5rem;
`;

export const Button = styled.div`
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
  width: 7rem;
  height: 2rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;

  @keyframes wave {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: -100% 0;
    }
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
