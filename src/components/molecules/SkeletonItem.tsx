import * as S from '../../styles/molecules/SkeletonItem';

const SkeletonItem = () => {
  return (
    <S.Container>
      <S.ItemProfileImgWrapper />
      <S.ItemInfoWrapper>
        <S.ItemInfo />
        <S.ItemInfo />
      </S.ItemInfoWrapper>
    </S.Container>
  );
};

export default SkeletonItem;
