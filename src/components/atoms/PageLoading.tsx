import * as S from '../../styles/atoms/PageLoading';

const PageLoading = () => {
  return (
    <S.Container>
      <S.ModalWrapper>
        <S.Spinner />
      </S.ModalWrapper>
    </S.Container>
  );
};

export default PageLoading;
