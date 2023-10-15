import styled from 'styled-components';

export const Img = styled.img`
  width: ${(props) => `${props?.width}rem`};
  height: ${(props) => `${props?.width}rem`};
  border-radius: 40%;
  overflow: hidden;

  .profile__image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
