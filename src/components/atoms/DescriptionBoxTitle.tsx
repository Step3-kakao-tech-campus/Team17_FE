import * as S from '../../styles/atoms/DescriptionBoxTitle';

type DescriptionBoxTitleProps = {
  title: string;
};

const DescriptionBoxTitle = ({ title }: DescriptionBoxTitleProps) => {
  return <S.PayTitle>{title}</S.PayTitle>;
};

export default DescriptionBoxTitle;
