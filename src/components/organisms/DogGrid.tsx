import * as S from './../../styles/organisms/DogGrid';
import Image from '../atoms/Image';
import { Plus } from '@phosphor-icons/react';
import { useState, useCallback } from 'react';
import DogModal from '../molecules/DogModal';
import { getDogProfile } from '../../apis/profile';
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
  const [selectDog, setSelectDog] = useState<number | null>(null);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const handleImageClick = (id: number): void => {
    setOpenModal(!isOpenModal);
    setSelectDog(id);
    // 여기에 getDogProfile 넣어도 되는지
  };
  // const dogdata = dogs;
  return (
    <>
      <S.Container>
        <h1>Dogs</h1>
        <S.DogsContainer>
          <button>
            <Plus size="32" />
          </button>
          {dogs.map((dog) => (
            <Image
              key={dog.id}
              src={dog.image}
              alt="강아지사진"
              size="4"
              onClick={() => handleImageClick(dog.id)}
            />
          ))}
          {isOpenModal && (
            <DogModal onClickToggleModal={onClickToggleModal}></DogModal>
          )}
        </S.DogsContainer>
      </S.Container>
    </>
  );
};

export default DogGrid;
