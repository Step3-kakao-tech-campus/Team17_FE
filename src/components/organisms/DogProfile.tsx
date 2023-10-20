import styled from 'styled-components';
import Image from '../atoms/Image';
import DogSizeImage from '../atoms/DogSizeImage';
import { Pencil } from '@phosphor-icons/react';
import { useState, useCallback } from 'react';
import DogSelectModal from '../molecules/DogSelectModal';

const DogProfile = () => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);
  return (
    <Container>
      <Dog>
        <div className="image">
          <Image
            src="./images/exampleDog.png"
            alt="강아지 예시"
            style={{
              border: '1px solid #e2e2e2', // 테두리 스타일 설정
              boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.2)', // 그림자 스타일 설정
            }}
          />
        </div>
        <div className="pencil">
          <Pencil color="black" onClick={() => onClickToggleModal()} />
        </div>
        <DogSpan>
          <div className="block">
            <span className="title"> 이름 </span>
            <Input type="text" name="name" />
          </div>
          <div className="block">
            <span className="title"> 견종 </span>
            <Input type="text" name="breed" />
          </div>
          <div className="block">
            <span className="title"> 나이 </span>
            <Input type="text" name="age" />
          </div>
        </DogSpan>
      </Dog>
      <DogSize>
        <div> 반려견 크기 </div>
        <Images>
          <DogSizeImage children="소형견" />
          <DogSizeImage children="중형견" />
          <DogSizeImage children="대형견" />
        </Images>
      </DogSize>
      {isOpenModal && (
        <DogSelectModal
          onClickToggleModal={onClickToggleModal}
        ></DogSelectModal>
      )}
    </Container>
  );
};

export default DogProfile;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40%;
`;

const Dog = styled.div`
  display: flex;
  height: 50%;
  /* background-color: green; */
  align-items: center;
  padding-left: 1rem;
  & > .image {
    width: 4rem;
    height: 4rem;
  }
  & > .pencil {
    position: relative;
    top: 2rem;
  }
`;

const DogSpan = styled.div`
  padding-left: 2rem;
  & > .block {
    border-bottom: 1px solid #e2e2e2;
    margin-bottom: 0.5rem;
  }
  & > .block > .title {
    color: black;
  }
`;

export const Input = styled.input`
  border: none;
  :read-only &:focus {
    /* outline: none; */
  }
`;

const DogSize = styled.div`
  height: 50%;
  background-color: yellow;
`;

const Images = styled.div`
  display: flex;
`;
