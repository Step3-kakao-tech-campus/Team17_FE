import * as S from '../../styles/atoms/PayInfo';

type PayInfoProps = {
  children: React.ReactNode;
};

const PayInfo = ({ children }: PayInfoProps) => {
  return <S.Container>{children}</S.Container>;
};

export default PayInfo;
