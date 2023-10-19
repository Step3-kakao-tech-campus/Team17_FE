import { useEffect, useState } from 'react';
import DescriptionBox from '../components/atoms/DescriptionBox';
import DescriptionBoxTitle from '../components/atoms/DescriptionBoxTitle';
import PayBox from '../components/organisms/PayBox';
import * as S from '../styles/pages/DescriptiontBoxContainer';
import axios from 'axios';
import { useQuery } from 'react-query';
import { getPayment } from '../apis/payment';

type paymentProps = {
  userId: 1;
  profile: '/images/dog-sample.png';
  walkStart: '2023-07-18T05:56:34.157+00:00';
  walkEnd: '2023-07-18T07:56:34.157+00:00';
  notificationId: 2;
  coin: 10000;
};

const Payment = () => {
  const [payment, setPayment] = useState<paymentProps>();
  // 결제 페이지 이동시 매칭 아이디 전달해줘야 함.
  // const {data: payment, isLoading} = useQuery("payment", () => getPayment(1));

  useEffect(() => {
    const mswData = async () => {
      try {
        const res = await axios({
          method: 'get',
          url: 'api/payment',
          params: {
            id: 1,
          },
        });
        setPayment(res.data.response);
        console.log('payment: ', res.data.response);
      } catch (error) {
        console.log(error);
      }
    };

    mswData();
  }, []);

  return (
    <S.Container>
      <DescriptionBoxTitle title="결제하기" />
      <DescriptionBox>{payment && <PayBox payment={payment} />}</DescriptionBox>
    </S.Container>
  );
};

export default Payment;
