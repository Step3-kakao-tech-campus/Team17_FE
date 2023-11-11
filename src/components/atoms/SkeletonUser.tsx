import * as S from '../../styles/atoms/SkeletonUser';

const SkeletonUser = () => {
  return (
    <S.Container>
      <S.ItemProfileImgWrapper />
      <S.TextContainer>
        <S.SkeletonContainer>
          <S.SkeletonBox />
        </S.SkeletonContainer>
        <S.SkeletonContainer>
          <S.SkeletonBox />
        </S.SkeletonContainer>
      </S.TextContainer>
      <S.ButtonWrapper>
        <S.Button />
        <S.Button />
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default SkeletonUser;
