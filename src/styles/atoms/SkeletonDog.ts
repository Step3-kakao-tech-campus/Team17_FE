import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 3rem;
  display: flex;
  width: 18rem;
  align-items: center;
  padding-left: 1.7rem;
`;

export const ItemProfileImgWrapper = styled.span`
  width: 4rem;
  height: 4rem;
  border-radius: 25px;
  background-color: #dadada;
  margin-left: 0.3rem;
  display: inline-block;
  margin-right: 0.6rem;
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
