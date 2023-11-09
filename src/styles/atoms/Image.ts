import styled from 'styled-components';

export const Img = styled.img`
  height: 100%;
  width: 100%;
  width: ${(props) => `${props?.width}rem`};
  height: ${(props) => `${props?.width}rem`};
  border-radius: 40%;
  overflow: hidden;
  object-fit: cover;
`;
