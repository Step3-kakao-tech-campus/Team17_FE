import * as S from '../../styles/organisms/PayBox';
import { PawPrint, CheckCircle } from '@phosphor-icons/react';
import { comma } from '../../utils/convert';
import { useNavigate } from 'react-router-dom';
import Spinner from '../atoms/Spinner';
import React, { useCallback, useMemo, useState } from 'react';

type paymentProps = {
  payment: {
    userId: number;
    profile: string;
    walkStart: string;
    walkEnd: string;
    notificationId: number;
    coin: number;
  };
};

const PayBox = ({ payment }: paymentProps) => {
  // request url = api/payment/{id}
  const { walkStart, walkEnd } = payment;
  const { coin } = payment;
  const startDate = walkStart.split('T');
  const endDate = walkEnd.split('T');

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
    navigate('/review');
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
      <div>
        <S.Title>결제 정보 확인</S.Title>
        {payment ? (
          <>
            <S.Profile>
              <S.ProfileWrapper>
                <S.ProfileImage
                  src={payment.profile}
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
        <S.PayButton onClick={handlePayment} disabled={!payment}>
          결제하기
        </S.PayButton>
      </div>
    </S.Container>
  );
};

export default React.memo(PayBox);
