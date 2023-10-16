import * as S from '../../styles/organisms/PayBox';
import { PawPrint, CheckCircle } from '@phosphor-icons/react';

const PayBox = () => {
  return (
    <S.Container>
      <div>
        <S.Title>결제 정보 확인</S.Title>
        <S.Profile>
          <S.ProfileWrapper>
            <S.ProfileImage
              src="/images/dog-sample.png"
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
            <span className="dog__coin">10,000멍</span>
          </S.CoinWrapper>
        </S.Profile>
        <S.WalkingWrapper>
          <S.WalkingInfo>
            <span>산책 시작일</span>
            <span>2023.08.26 토 15:00</span>
          </S.WalkingInfo>
          <S.WalkingInfo>
            <span>산책 종료일</span>
            <span>2023.08.26 토 15:00</span>
          </S.WalkingInfo>
        </S.WalkingWrapper>
        <S.PayServiceWrapper>
          <S.PayServiceInfo>
            <span>서비스 금액</span>
            <span>9,000 멍</span>
          </S.PayServiceInfo>
          <S.PayServiceInfo>
            <span>서비스 수수료</span>
            <span>+1,000 멍</span>
          </S.PayServiceInfo>
          <S.PayServiceInfo>
            <span>최종금액</span>
            <span>
              <span className="total__price">10,000</span> 멍
            </span>
          </S.PayServiceInfo>
          <S.PayServiceInfo>
            <span>남은 멍코인</span>
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
        <S.PayButton>결제하기</S.PayButton>
      </div>
    </S.Container>
  );
};

export default PayBox;
