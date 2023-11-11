import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 0.2rem;
  margin-bottom: 0.5rem;
  font-family: 'Gowun';
  color: black;

  @media (min-width: 768px) {
    padding-left: 1rem;
  }
  cursor: pointer;
`;

export const LocationIconWrapper = styled.span`
  padding-right: 0.7rem;
`;

export const LocationTextWrapper = styled.p`
  font-size: 1rem;
  display: inline;
  padding-right: 0.5rem;
`;

export const LocationText = styled.p`
  font-size: 1rem;
  display: inline;
  padding-right: 0.5rem;
  margin-left: 1rem;
`;
