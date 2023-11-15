import { Suspense, useEffect, useState } from 'react';
import DescriptionBox from '../components/atoms/DescriptionBox';
import DescriptionBoxTitle from '../components/atoms/DescriptionBoxTitle';
import PayBox from '../components/organisms/PayBox';
import { getPayment } from '../apis/payment';
import Spinner from '../components/atoms/Spinner';
import Container from '../components/atoms/Container';
import { useLocation, useNavigate } from 'react-router-dom';

const Payment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const matchingId = state.matchingId;
  const [payment, setPayment] = useState();
  // const {
  //   data: payment,
  //   isLoading,
  //   isError,
  // } = useQuery(['payment'], () => getPayment(matchingId));

  useEffect(() => {
    getPayment(matchingId)
      .then((res) => {
        setPayment(res.data.response);
      })
      .catch((err) => {
        if (err.message === 'refresh') {
          getPayment(matchingId)
            .then((res) => {
              setPayment(res.data.response);
            })
            .catch((err) => {
              if (err.status) {
                switch (err.status) {
                  case 400:
                    alert(err.data.error.message);
                    navigate(-1);
                    break;
                  default:
                    alert('결제 정보를 불러오는데 실패했습니다.');
                    navigate(-1);
                    break;
                }
              }
            });
        } else if (err.status) {
          switch (err.status) {
            case 400:
              alert(err.data.error.message);
              navigate(-1);
              break;
            default:
              alert('결제 정보를 불러오는데 실패했습니다.');
              navigate(-1);
              break;
          }
        }
      });
  }, []);

  return (
    <Container>
      <DescriptionBoxTitle title="결제하기" />
      <DescriptionBox>
        <Suspense fallback={<Spinner />}>
          {payment ? <PayBox payment={payment} /> : <Spinner />}
        </Suspense>
      </DescriptionBox>
    </Container>
  );
};

export default Payment;
