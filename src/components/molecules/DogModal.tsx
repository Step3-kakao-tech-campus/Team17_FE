import { useState, PropsWithChildren, useCallback } from 'react';
import * as S from '../../styles/molecules/DogModal';
import Image from '../atoms/Image';
import { X } from '@phosphor-icons/react';
import DogEditModal from './DogEditModal';
type ModalDefaultType = {
  onClickToggleModal: () => void;
};
type dogProp = {
  image: string;
  name: string;
  sex: string;
  breed: string;
  size: string;
  specificity: string;
  age: number;
};
type dataProp = {
  success: boolean;
  response: dogProp;
  error: null;
};

function DogModal({ onClickToggleModal }: PropsWithChildren<ModalDefaultType>) {
  const [isOpenEditModal, setOpenEditModal] = useState<boolean>(false);

  const onClickToggleEditModal = useCallback(() => {
    setOpenEditModal(!isOpenEditModal);
  }, [isOpenEditModal]);
  const handleOnClick = () => {
    setOpenEditModal(!isOpenEditModal);
  };

  const data: dataProp = {
    success: true,
    response: {
      image: './images/dog-sample.png',
      name: '복슬이',
      sex: 'female',
      breed: '시바견',
      size: '소형견',
      specificity: '저희 강아지는 수줍음이 너무 많아요',
      age: 3,
    },
    error: null,
  };
  const dogProfile: dogProp = data.response;
  return (
    <S.ModalContainer>
      <S.DialogBox>
        <S.CancelButton>
          <X size="24" onClick={onClickToggleModal} color="black" />
        </S.CancelButton>
        <Image src={dogProfile.image} alt="강아지세부프로필" size="8"></Image>
        <S.ProfileContainer>
          <div className="block">
            <span className="title"> 이름 </span>
            <S.Input type="text" value={dogProfile.name} readOnly />
          </div>
          <div className="block">
            <span className="title"> 성별 </span>
            <S.Input type="text" value={dogProfile.sex} readOnly />
          </div>
          <div className="block">
            <span className="title"> 견종 </span>
            <S.Input type="text" value={dogProfile.breed} readOnly />
          </div>
          <div className="block">
            <span className="title"> 나이 </span>
            <S.Input type="text" value={dogProfile.age + '살'} readOnly />
          </div>
          <div className="block">
            <span className="title">분류 </span>
            <S.Input type="text" value={dogProfile.size} readOnly />
          </div>
          <div className="special">
            <span>특이사항</span>
            <S.Input
              type="text"
              value={dogProfile.specificity}
              readOnly
              style={{
                backgroundColor: '#e2e2e2',
                border: 'none',
                width: '100%',
                height: '3rem',
                borderRadius: '0.5rem',
                padding: '0.4rem',
                marginTop: '0.4rem',
              }}
            />
          </div>
          <S.Button onClick={handleOnClick}> 수정하기 </S.Button>
          {isOpenEditModal && (
            <DogEditModal
              onClickToggleModal={onClickToggleEditModal}
            ></DogEditModal>
          )}
        </S.ProfileContainer>
      </S.DialogBox>
      <S.Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();

          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      />
    </S.ModalContainer>
  );
}

export default DogModal;
