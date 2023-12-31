import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
`;

export const ProfileWrapper = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 2.2rem;
  height: 2.2rem;
  color: black;
  border-radius: 50%;
  border: 1px solid lightgray;
  .profile__image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  cursor: pointer;
`;
