import * as S from '../../styles/atoms/SkeletonNoti';

function SkeletonNoti() {
  return (
    <>
      <S.Container>
        <button className="button active">산책시키기</button>
        <button className="button">지원서</button>
        <button className="button">리뷰</button>
      </S.Container>
      <S.ListContainer />
      <S.ListContainer />
      <S.ListContainer />
    </>
  );
}

export default SkeletonNoti;
