import * as S from '../../styles/organisms/DogProfile';
import Image from '../atoms/Image';
import DogSizeImage from '../atoms/DogSizeImage';
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
      <S.Container>
        <S.Dog>
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
          <S.DogSpan>
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
          </S.DogSpan>
        </S.Dog>
        <S.DogSize>
          <span> 반려견 크기 </span>
          <S.Images>
            <DogSizeImage children="소형견" mark={profile.size === '소형견'} />
            <DogSizeImage children="중형견" mark={profile.size === '중형견'} />
            <DogSizeImage children="대형견" mark={profile.size === '대형견'} />
          </S.Images>
        </S.DogSize>
      </S.Container>
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
