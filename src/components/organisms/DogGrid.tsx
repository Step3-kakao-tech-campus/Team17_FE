import * as S from './../../styles/organisms/DogGrid';
import Image from '../atoms/Image';
import { Plus } from '@phosphor-icons/react';
import { useState, useCallback } from 'react';
import DogModal from '../molecules/DogModal';
import AddDogModal from '../molecules/AddDogModal';

type Dog = {
  id: number;
  image: string;
};
type dogProps = {
  dogs: Dog[];
  isOwner: boolean;
};
const DogGrid = ({ dogs, isOwner }: dogProps) => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [plusModal, setPlusModal] = useState<boolean>(false);
  const [selectedDog, setSelectDog] = useState<number>(-1);

  // 강아지 상세정보 모달
  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const handleImageClick = (id: number): void => {
    setOpenModal(!isOpenModal);
    setSelectDog(id);
  };

  // 강아지 추가 모달
  const onPlusToggleModal = useCallback(() => {
    setPlusModal(!plusModal);
  }, [plusModal]);
  // 강아지 추가
  const handlePlusClick = () => {
    setPlusModal(!plusModal);
  };
  // const dogdata = dogs;
  return (
    <>
      <S.Container>
        <S.DogsContainer>
          {isOwner ? (
            <button onClick={() => handlePlusClick()}>
              <Plus size="32" />
            </button>
          ) : (
            ''
          )}
          {dogs
            ? dogs.map((dog) => (
                <S.DogItem key={dog.id}>
                  <Image
                    src={dog.image}
                    alt="강아지사진"
                    size="4.5"
                    onClick={() => handleImageClick(dog.id)}
                  />
                </S.DogItem>
              ))
            : // <S.Loading>
              //   <Spinner />
              // </S.Loading>
              ''}
          {isOpenModal && (
            <DogModal
              onClickToggleModal={onClickToggleModal}
              selectedId={selectedDog}
            ></DogModal>
          )}
          {plusModal && (
            <AddDogModal onClickToggleModal={onPlusToggleModal}></AddDogModal>
          )}
        </S.DogsContainer>
      </S.Container>
    </>
  );
};

export default DogGrid;
