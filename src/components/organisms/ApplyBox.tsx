import * as S from '../../styles/organisms/ApplyBox';

const ReviewBox = () => {
  return (
    <S.Container>
      <div>
        <S.ProfileWrapper>
          <S.ProfileImage
            src="/images/logo.png"
            alt="지원하기 프로필"
            size="4"
            className="review__profile"
          />
          <span className="person__name">댕댕조아</span>
        </S.ProfileWrapper>
      </div>
    </S.Container>
  );
};

export default ReviewBox;
