import { CheckCircle } from '@phosphor-icons/react';
import * as S from '../../styles/organisms/ReviewBox';

const dogOwner = [
  '온순해요',
  '공고대로에요',
  '강아지 용품 준비가 잘 되어있어요',
  '훈련되어 있어요',
];

const partTimeWorker = [
  '친절해요',
  '소통이 잘 돼요',
  '약속을 잘 지켜주셨어요',
  '강아지를 잘 챙겨주셨어요',
];

const ReviewBox = () => {
  const user = 'dogOwner';
  return (
    <S.Container>
      <div>
        <S.Title>사용자에 대해 간단히 리뷰를 작성해주세요</S.Title>
        <S.ProfileWrapper>
          <S.ProfileImage
            src="/images/dog-sample.png"
            alt="리뷰하기 프로필"
            size="4"
            className="review__profile"
          />
          <span className="dog__name">복슬이</span>
        </S.ProfileWrapper>
        <S.CheckboxWrapper>
          <div>
            <CheckCircle
              color="#a59d52"
              weight="fill"
              size={20}
              className="check__icon"
            />
            {user === 'dogOwner' ? dogOwner[0] : partTimeWorker[0]}
          </div>
          <div>
            <CheckCircle
              color="#a59d52"
              weight="fill"
              size={20}
              className="check__icon"
            />
            {user === 'dogOwner' ? dogOwner[1] : partTimeWorker[1]}
          </div>
        </S.CheckboxWrapper>
        <S.CheckboxWrapper>
          <div>
            <CheckCircle
              color="#a59d52"
              weight="fill"
              size={20}
              className="check__icon"
            />
            {user === 'dogOwner' ? dogOwner[2] : partTimeWorker[2]}
          </div>
          <div>
            <CheckCircle
              color="#a59d52"
              weight="fill"
              size={20}
              className="check__icon"
            />
            {user === 'dogOwner' ? dogOwner[3] : partTimeWorker[3]}
          </div>
        </S.CheckboxWrapper>
      </div>
    </S.Container>
  );
};

export default ReviewBox;
