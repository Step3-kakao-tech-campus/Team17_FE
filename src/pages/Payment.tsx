import { Suspense } from 'react';
import DescriptionBox from '../components/atoms/DescriptionBox';
import DescriptionBoxTitle from '../components/atoms/DescriptionBoxTitle';
import PayBox from '../components/organisms/PayBox';
import * as S from '../styles/pages/DescriptiontBoxContainer';
import { useQuery } from 'react-query';
import { getPayment } from '../apis/payment';
import { Spinner } from '@phosphor-icons/react';

const Payment = () => {
  // 결제 페이지 이동시 매칭 아이디 전달해줘야 함.
  const { data: payment, isLoading } = useQuery('payment', () => getPayment(1));

  return (
    <S.Container>
      <DescriptionBoxTitle title="결제하기" />
      <DescriptionBox>
        <Suspense fallback={<Spinner />}>
          {payment && <PayBox payment={payment.data.response} />}
        </Suspense>
      </DescriptionBox>
    </S.Container>
  );
};

export default Payment;
