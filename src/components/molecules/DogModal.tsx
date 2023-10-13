import { useState, PropsWithChildren, useCallback } from 'react';
import styled from 'styled-components';
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
    <ModalContainer>
      <DialogBox>
        <CancelButton>
          <X size="24" onClick={onClickToggleModal} color="black" />
        </CancelButton>
        <Image src={dogProfile.image} alt="강아지세부프로필" size="8"></Image>
        <ProfileContainer>
          <div className="block">
            <span className="title"> 이름 </span>
            <Input type="text" value={dogProfile.name} readOnly />
          </div>
          <div className="block">
            <span className="title"> 성별 </span>
            <Input type="text" value={dogProfile.sex} readOnly />
          </div>
          <div className="block">
            <span className="title"> 견종 </span>
            <Input type="text" value={dogProfile.breed} readOnly />
          </div>
          <div className="block">
            <span className="title"> 나이 </span>
            <Input type="text" value={dogProfile.age + '살'} readOnly />
          </div>
          <div className="block">
            <span className="title">분류 </span>
            <Input type="text" value={dogProfile.size} readOnly />
          </div>
          <div className="special">
            <span>특이사항</span>
            <Input
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
          <Button onClick={handleOnClick}> 수정하기 </Button>
          {isOpenEditModal && (
            <DogEditModal
              onClickToggleModal={onClickToggleEditModal}
            ></DogEditModal>
          )}
        </ProfileContainer>
      </DialogBox>
      <Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();

          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      />
    </ModalContainer>
  );
}
const ModalContainer = styled.div`
  z-index: 1200;
  position: absolute;
`;

const DialogBox = styled.dialog`
  position: fixed;
  top: 3rem;
  @media screen and (min-width: 768px) {
    width: 50rem;
  }
  width: 20rem;
  height: 31rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 1rem;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
`;

const CancelButton = styled.div`
  text-align: right;
  width: 100%;
`;
const ProfileContainer = styled.div`
  width: 90%;
  color: black;
  & > div.block {
    width: 50%;
    border-bottom: 1px solid #d3d3d3;
    padding-bottom: 0.4rem;
    margin-top: 0.4rem;
  }
  & > div.special {
    margin-top: 1rem;
  }

  & > div > span.title {
    color: #a59d52;
  }
  & > div.special > span {
    font-size: 1.5rem;
  }
`;
const Button = styled.button`
  margin-top: 0.3rem;
  width: 100%;
  background-color: #a59d52;
  color: white;
  border-radius: 1rem;
`;
const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
  border: none;
  :read-only &:focus {
    outline: none;
  }
`;

export default DogModal;
