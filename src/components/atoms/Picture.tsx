import React from 'react';
import styled from 'styled-components';

type PhotoProps = {
  className?: string;
  src: string;
  alt: string;
};

const Photo = ({ className, src, alt }: PhotoProps) => {
  return (
    <picture className={className}>
      <source srcSet={src} />
      <StyledImg src={src} alt={alt} />
    </picture>
  );
};

export default Photo;

const StyledImg = styled.img`
  width: inherit;
  border-radius: 10%;
`;
