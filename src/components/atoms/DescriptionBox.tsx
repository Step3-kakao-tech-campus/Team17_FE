import * as S from '../../styles/atoms/PayInfo';

type DescriptionBoxProps = {
  children: React.ReactNode;
};

const DescriptionBox = ({ children }: DescriptionBoxProps) => {
  return <S.Container>{children}</S.Container>;
};

export default DescriptionBox;
