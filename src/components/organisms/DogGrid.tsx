import * as S from './../../styles/organisms/DogGrid';
import Image from '../atoms/Image';
import { Plus } from '@phosphor-icons/react';
import { useState, useCallback } from 'react';
import DogModal from '../molecules/DogModal';
// import { getDogProfile } from '../../apis/profile';
import DogEditModal from '../molecules/DogPlusModal';
// "dogs": [
//   {
//     "id": 1,
//      "image" : "basicProfile_47838475947393908393.png",
//   },
//   {
//     "id": 2,
//      "image" : "basicProfile_47838475947393908393.png",
//   },
//   {
//     "id": 3,
//      "image" : "basicProfile_47838475947393908393.png",
//   },
// ],
type Dog = {
  id: number;
  image: string;
};
type dogProps = {
  dogs: Dog[];
};
const DogGrid = ({ dogs }: dogProps) => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [plusModal, setPlusModal] = useState<boolean>(false);
  const [_, setSelectDog] = useState<number | null>(null);

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
        <h1>Dogs</h1>
        <S.DogsContainer>
          <button onClick={() => handlePlusClick()}>
            <Plus size="32" />
          </button>
          {dogs.map((dog) => (
            <S.DogItem key={dog.id}>
              <Image
                src={dog.image}
                alt="강아지사진"
                size="4.5"
                onClick={() => handleImageClick(dog.id)}
              />
            </S.DogItem>
          ))}
          {isOpenModal && (
            <DogModal onClickToggleModal={onClickToggleModal}></DogModal>
          )}
          {plusModal && (
            <DogEditModal onClickToggleModal={onPlusToggleModal}></DogEditModal>
          )}
        </S.DogsContainer>
      </S.Container>
    </>
  );
};

export default DogGrid;
