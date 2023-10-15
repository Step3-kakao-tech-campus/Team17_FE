import * as S from '../../styles/atoms/PayTitle';

type PayTitleProps = {
  title: string;
};

const PayTitle = ({ title }: PayTitleProps) => {
  return <S.PayTitle>{title}</S.PayTitle>;
};

export default PayTitle;
