import { useState, PropsWithChildren } from 'react';
import styled from 'styled-components';
import Image from '../atoms/Image';
import { X } from '@phosphor-icons/react';

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
function DogEditModal({
  onClickToggleModal,
}: PropsWithChildren<ModalDefaultType>) {
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
        <MainContainer>
          <Image
            src="./images/dog-sample.png"
            alt="강아지세부프로필"
            size="6"
          ></Image>
          <DogInfo>
            <div className="block">
              <span className="title"> 이름 </span>
              <Input type="text" placeholder={dogProfile.name} />
            </div>
            <div className="block">
              <span className="title"> 성별 </span>
              <Input type="text" placeholder={dogProfile.sex} />
            </div>
            <div className="block">
              <span className="title"> 견종 </span>
              <Input type="text" placeholder={dogProfile.breed} />
            </div>
            <div className="block">
              <span className="title"> 나이 </span>
              <Input type="text" placeholder={dogProfile.age + '살'} />
            </div>
            <div className="block">
              <span className="title">분류 </span>
              <Input type="text" placeholder={dogProfile.size} />
            </div>
          </DogInfo>
        </MainContainer>
        <UniqueInfo>
          <div>특이사항</div>
          <textarea
            placeholder="ex) 저희 강아지는 수줍음이 많아서 낮을 많이 가립니다. 그래서 천천히 다가가주시길 바랍니다."
            style={{
              backgroundColor: '#e2e2e2',
              border: 'none',
              width: '100%',
              height: '100%',
              borderRadius: '0.5rem',
            }}
          ></textarea>
        </UniqueInfo>
        <Button> 등록하기 </Button>
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
  z-index: 1500;
  position: absolute;
`;

const DialogBox = styled.dialog`
  position: fixed;
  top: 3rem;
  @media screen and (min-width: 768px) {
    width: 50rem;
  }
  width: 20rem;
  height: 30rem;
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

export const Button = styled.button`
  margin-top: 0.3rem;
  width: 90%;
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

const MainContainer = styled.div`
  color: black;
  display: flex;
  width: 90%;
  justify-content: start;
`;
const DogInfo = styled.div`
  margin-left: 1rem;
  font-size: 0.8rem;
  & > div.block {
    border-bottom: 1px solid #d3d3d3;
    padding-bottom: 0.4rem;
    margin-top: 0.4rem;
  }
  & > div > span.title {
    color: #a59d52;
  }
`;

const UniqueInfo = styled.div`
  color: black;
  width: 90%;
  height: 12rem;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  & > div {
    margin-bottom: 0.3rem;
  }
`;

const Input = styled.input`
  border: none;
  :read-only &:focus {
    outline: none;
  }
`;
export default DogEditModal;
