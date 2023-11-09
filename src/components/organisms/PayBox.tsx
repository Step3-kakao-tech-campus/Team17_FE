import * as S from '../../styles/organisms/PayBox';
import { PawPrint, CheckCircle } from '@phosphor-icons/react';
import { comma } from '../../utils/convert';
import { useNavigate } from 'react-router-dom';
import Spinner from '../atoms/Spinner';
import { postPayment } from '../../apis/payment';
import React, { useCallback, useMemo, useState } from 'react';
import PageLoading from '../atoms/PageLoading';

type paymentProps = {
  payment: {
    userId: number;
    profile: string;
    walkStartTime: string;
    walkEndTime: string;
    notificationId: number;
    coin: number;
    walkId: number;
  };
};

const PayBox = ({ payment }: paymentProps) => {
  const [isLoading, setIsLoading] = useState(false);
  // request url = api/payment/{id}
  const { coin, profile, notificationId, walkId } = payment;
  const startDate = '2021-11-08T11:58:20.551705'.split('T'); //walkStartTime.split('T');
  const endDate = '2021-11-08T11:58:20.551705'.split('T'); //walkEndTime.split('T');

  const serviceCost = 1000;
  const totalCost = useMemo(
    () => comma(coin + serviceCost),
    [coin + serviceCost],
  );

  const userCoin = comma(10000);

  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  const handlePayment = () => {
    if (!agree) return alert('서비스 이용약관에 동의해주세요');
    setIsLoading(true);

    postPayment(notificationId, walkId)
      .then(() => {
        setIsLoading(false);
        alert('결제가 완료되었습니다.');
        // 채팅방 페이지로 이동
        navigate('/submit', {
          state: {
            push: '/chatlist', // TODO: 채팅방으로 이동
            title: '결제 완료!',
            buttonText: '채팅방으로 돌아가기',
          },
          replace: true,
        });
      })
      .catch((err) => {
        setIsLoading(false);
        if (err.status) {
          switch (err.status) {
            case 401:
              alert('결제 완료한 공고입니다.');
              navigate('/chatlist', { replace: true });
              break;
            case 400:
              alert(err.data.error.message);
              navigate(-1);
              break;
            default:
              alert('결제에 실패했습니다. 다시 시도해주세요.');
              navigate(-1);
          }
        }
      });
  };

  const handleAgree = useCallback(() => {
    setAgree(!agree);
  }, [agree]);

  // Todo: 견주 프로필에 image 받아온 값 넣기

  const checkCircleIcon = () => (
    <CheckCircle
      color="#a59d52"
      size={25}
      className="check__icon"
      style={{ marginLeft: '1rem', paddingRight: '0.5rem' }}
    />
  );

  const checkCircleIconFill = () => (
    <CheckCircle
      color="#a59d52"
      weight="fill"
      size={25}
      className="check__icon"
      style={{ marginLeft: '1rem', paddingRight: '0.5rem' }}
    />
  );

  return (
    <S.Container>
      <S.BottomContentWrapper>
        <div>
          <S.Title>결제 정보 확인</S.Title>
          {payment ? (
            <>
              <S.Profile>
                <S.ProfileWrapper>
                  <S.ProfileImage
                    src={'/images/dog-sample.png' || profile}
                    alt="결제하기 견주 프로필"
                    size="4"
                    className="pay__profile"
                  />
                  <span className="dog__name">복슬이</span>
                </S.ProfileWrapper>
                <S.CoinWrapper>
                  <S.CoinWrapper>
                    <span>멍코인</span>
                    <PawPrint
                      color="#a59d52"
                      weight="fill"
                      size={18}
                      className="paw__icon"
                    />
                  </S.CoinWrapper>
                  <span className="dog__coin">{userCoin}멍</span>
                </S.CoinWrapper>
              </S.Profile>
              <S.WalkingWrapper>
                <S.WalkingInfo>
                  <span className="dog__walking">산책 시작일</span>
                  <span>
                    {startDate[0]} {startDate[1].substring(0, 5)}
                  </span>
                </S.WalkingInfo>
                <S.WalkingInfo>
                  <span className="dog__walking">산책 종료일</span>
                  <span>
                    {endDate[0]} {endDate[1].substring(0, 5)}
                  </span>
                </S.WalkingInfo>
              </S.WalkingWrapper>
              <S.PayServiceWrapper>
                <S.PayServiceInfo>
                  <span className="dog__walking">서비스 금액</span>
                  <span>{coin} 멍</span>
                </S.PayServiceInfo>
                <S.PayServiceInfo>
                  <span className="dog__walking">서비스 수수료</span>
                  <span>+{comma(serviceCost)} 멍</span>
                </S.PayServiceInfo>
                <S.PayServiceInfo>
                  <span className="dog__walking">최종금액</span>
                  <span>
                    <span className="total__price">{totalCost}</span> 멍
                  </span>
                </S.PayServiceInfo>
                <S.PayServiceInfo>
                  <span className="dog__walking">남은 멍코인</span>
                  <span>0 멍</span>
                </S.PayServiceInfo>
              </S.PayServiceWrapper>
            </>
          ) : (
            <Spinner />
          )}
        </div>
        <div>
          <S.ServicePolicy onClick={handleAgree}>
            {agree ? checkCircleIconFill() : checkCircleIcon()}
            <span>서비스 이용약관 동의</span>
          </S.ServicePolicy>
          <S.ButtonWrapper>
            <S.PayButton onClick={handlePayment} disabled={!payment}>
              결제하기
            </S.PayButton>
          </S.ButtonWrapper>
        </div>
      </S.BottomContentWrapper>
      {isLoading ? <PageLoading /> : null}
    </S.Container>
  );
};

export default React.memo(PayBox);
