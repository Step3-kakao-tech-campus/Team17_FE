import React from 'react';
import styled from 'styled-components';

type PhotoProps = {
  className?: string;
  src: string;
  alt: string;
};

const Photo = ({ className, src, alt }: PhotoProps) => {
  return (
    <StyledImg className={className}>
      <source srcSet={src} />
      <img src={src} alt={alt} />
    </StyledImg>
  );
};

export default Photo;

const StyledImg = styled.picture`
  width: inherit;
  height: inherit;
  img {
    width: inherit;
    height: inherit;
    border-radius: 10%;
  }
`;
