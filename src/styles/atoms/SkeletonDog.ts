import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 18rem;
  align-items: center;
  padding-left: 1rem;
`;

export const ItemProfileImgWrapper = styled.span`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  background-color: #dadada;
  margin-left: 0.6rem;
  display: inline-block;
  margin-right: 1rem;
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
