import { Suspense } from 'react';
import DescriptionBox from '../components/atoms/DescriptionBox';
import DescriptionBoxTitle from '../components/atoms/DescriptionBoxTitle';
import PayBox from '../components/organisms/PayBox';
import { useQuery } from 'react-query';
import { getPayment } from '../apis/payment';
import Spinner from '../components/atoms/Spinner';
import Container from '../components/atoms/Container';

const Payment = () => {
  // 결제 페이지 이동시 매칭 아이디 전달해줘야 함.
  const {
    data: payment,
    isLoading,
    isError,
  } = useQuery('payment', () => getPayment(1));

  if (isError) {
    alert('결제 정보를 불러오는데 실패했습니다.');
  }

  console.log('payment', payment);
  console.log('isLoading', isLoading);
  return (
    <Container>
      <DescriptionBoxTitle title="결제하기" />
      <DescriptionBox>
        <Suspense fallback={<Spinner />}>
          {payment ? <PayBox payment={payment.data.response} /> : <Spinner />}
        </Suspense>
      </DescriptionBox>
    </Container>
  );
};

export default Payment;
