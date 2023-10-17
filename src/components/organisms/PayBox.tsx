import * as S from '../../styles/organisms/PayBox';
import { PawPrint, CheckCircle } from '@phosphor-icons/react';
import { comma } from '../../utils/convert';
import { useNavigate } from 'react-router-dom';

const data = {
  success: true,
  response: {
    id: 1,
    start: '2023-07-18T05:56:34.157+00:00',
    end: '2023-07-18T07:56:34.157+00:00',
    notifications: {
      id: 1,
      cost: 30000,
      dog: {
        breed: '시바견',
        age: 3,
        image: '/images/dog-sample.png',
      },
    },
  },

  error: null,
};

const PayBox = () => {
  // request url = api/payment/{id}
  const { start, end } = data.response;
  const { dog, cost } = data.response.notifications;
  const startDate = start.split('T');
  const endDate = end.split('T');

  const serviceCost = 1000;
  const totalCost = comma(cost + serviceCost);

  const userCoin = comma(10000);

  const navigate = useNavigate();
  const handlePayment = () => {
    navigate('/review');
  };

  // Todo: 견주 프로필에 image 받아온 값 넣기
  return (
    <S.Container>
      <div>
        <S.Title>결제 정보 확인</S.Title>
        <S.Profile>
          <S.ProfileWrapper>
            <S.ProfileImage
              src={dog.image}
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
            <span>{cost} 멍</span>
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
      </div>
      <div>
        <S.ServicePolicy>
          <CheckCircle
            color="#a59d52"
            weight="fill"
            size={20}
            className="check__icon"
          />
          <span>서비스 이용약관 동의</span>
        </S.ServicePolicy>
        <S.PayButton onClick={handlePayment}>결제하기</S.PayButton>
      </div>
    </S.Container>
  );
};

export default PayBox;
