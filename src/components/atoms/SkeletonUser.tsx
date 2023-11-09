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
        <S.SkeletonContainer>
          <S.SkeletonBox />
        </S.SkeletonContainer>
      </S.TextContainer>
    </S.Container>
  );
};

export default SkeletonUser;
