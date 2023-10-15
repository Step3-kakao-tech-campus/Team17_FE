import PayInfo from '../components/atoms/PayInfo';
import PayTitle from '../components/atoms/PayTitle';
import PayBox from '../components/organisms/PayBox';
import * as S from '../styles/pages/Payment';

const Payment = () => {
  return (
    <S.Container>
      <PayTitle title="결제하기" />
      <PayInfo>
        <PayBox />
      </PayInfo>
    </S.Container>
  );
};

export default Payment;
