import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 0;
  background-color: #f1f1f1;
  margin: 0.7rem 0.5rem;

  @media screen and (min-width: 768px) {
    padding-left: 3rem;
  }

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
  width: 3rem;
  height: 2.8rem;
  border-radius: 50%;
  background-color: #dadada;
  margin-left: 0.6rem;
  display: inline-block;
`;

export const ItemInfo = styled.span`
  margin-left: 1rem;
  width: 90%;
  height: 1.3rem;
  background-color: #dadada;
  margin-bottom: 0.3rem;
  display: inline-block;
`;

export const ItemInfoWrapper = styled.span`
  width: 100%;
`;
