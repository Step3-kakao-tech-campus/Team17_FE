import { ReactNode } from 'react';
import * as S from '../../styles/atoms/Container';

const Container = ({ children }: { children: ReactNode }) => {
  return <S.Container>{children}</S.Container>;
};

export default Container;
