import { ReactNode } from 'react';

type BoxProps = {
  children: ReactNode;
  className?: string;
};

const Box = ({ children, className = '' }: BoxProps) => {
  return <div className={`box ${className}`}>{children}</div>;
};

export default Box;
