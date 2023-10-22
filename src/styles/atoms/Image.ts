import styled from 'styled-components';

export const Img = styled.img`
  width: ${(props) => `${props?.width}rem`};
  height: ${(props) => `${props?.width}rem`};
  border-radius: 40%;
  overflow: hidden;
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
