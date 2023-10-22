import styled from 'styled-components';
import Image from '../atoms/Image';
import DogSizeImage from '../atoms/DogSizeImage';
import { Pencil } from '@phosphor-icons/react';
import { useState, useCallback } from 'react';
import DogSelectModal from '../molecules/DogSelectModal';
type ProfileProps = {
  dogId: number;
  image: string;
  name: string;
  sex: string;
  breed: string;
  size: string;
  specificity: string;
  age: number;
  memberId: number;
};

const DogProfile = ({ profile }: { profile: ProfileProps }) => {
  return (
    <>
      <Container>
        <Dog>
          <div className="image">
            <Image
              src={profile.image}
              alt="강아지 예시"
              style={{
                border: '1px solid #e2e2e2', // 테두리 스타일 설정
                boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.2)', // 그림자 스타일 설정
              }}
            />
          </div>
          {/* <div className="pencil">
            <Pencil color="black" onClick={() => onClickToggleModal()} />
          </div> */}
          <DogSpan>
            <div className="block">
              <span className="title"> 이름 </span>
              <span> {profile.name}</span>
            </div>
            <div className="block">
              <span className="title"> 견종 </span>
              <span> {profile.breed}</span>
            </div>
            <div className="block">
              <span className="title"> 나이 </span>
              <span> {profile.age + ' 살'}</span>
            </div>
          </DogSpan>
        </Dog>
        <DogSize>
          <span> 반려견 크기 </span>
          <Images>
            <DogSizeImage children="소형견" mark={profile.size === '소형견'} />
            <DogSizeImage children="중형견" mark={profile.size === '중형견'} />
            <DogSizeImage children="대형견" mark={profile.size === '대형견'} />
          </Images>
        </DogSize>
      </Container>
      {/* {isOpenModal && (
        <DogSelectModal
          onClickToggleModal={onClickToggleModal}
          onDogSelection={handleDogSelection}
        ></DogSelectModal>
      )} */}
    </>
  );
};

export default DogProfile;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: 45%; */
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e2e2e2;
`;

const Dog = styled.div`
  display: flex;
  /* height: 40%; */
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
  margin-top: 0.5rem;
  height: 100%;
  /* background-color: yellow; */
  color: black;
  & > span {
    font-size: 1.2rem;
  }
`;

const Images = styled.div`
  display: flex;
  /* width: 100%; */
  /* height: 90%; */
  justify-content: space-around;
  align-items: end;
  /* background-color: green; */
`;
