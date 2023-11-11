import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (max-width: 768px) {
    width: 90vw;
    margin: 0 5vw;
  }
  @media screen and (min-width: 768px) {
    width: 90vw;
    margin: 0 1.5rem;
  }
`;

export const MatchRoom = styled.div`
  font-size: 1.2rem;
  margin-top: 1rem;
`;
export const TopBanner = styled.div`
  margin-top: 2rem;
  font-size: 1.5rem;
  color: black;
  justify-content: space-between;

  .apply {
    margin-left: 1rem;
  }
`;
