import React from 'react';
import Photo from '../atoms/Photo';
import styled from 'styled-components';
import Image from '../atoms/Image';

type DetailDog = {
  breed: string;
  age: number;
  image: string;
};
type Dogs = {
  id: number;
  image: string;
};
type Post = {
  id: number;
  title: string;
  start: string;
  end: string;
  dog: DetailDog;
};
type profileProps = {
  profile: {
    id: number;
    nickname: string;
    profile_img: string;
    profileContent: string;
    dog_bowl: number;
    dogCoin: number;
    dogs: Dogs[];
    notifications: Post[];
    application: Post[];
    review: Post[];
  };
};
// /api/profile
const Profile = ({ profile }: profileProps) => {
  // const profile = profile;
  return (
    <>
      <Container>
        <MainProfile>
          <Image
            src="./images/onboard_dog.png"
            alt="본인프사"
            size="6.5"
          ></Image>
          <StyleTopProfileText>
            <span>{profile.nickname}</span>
            <StyleDogBab>
              <span>개 밥그릇</span>
              <div>
                <span>{profile.dog_bowl} % </span>
                <Image src="./images/paw.png" alt="개밥그릇"></Image>
              </div>
            </StyleDogBab>
            <DogCoin>
              <span> 멍코인</span>
              <Image src="./images/paw1.png" alt="멍코인" size="1.5"></Image>
              <p> &nbsp;</p>
              <p> &nbsp;</p>
              <p> {profile.dogCoin} 멍</p>
            </DogCoin>
          </StyleTopProfileText>
        </MainProfile>
        <div className="profileContent"> {profile.profileContent}</div>
        <Button> 프로필 수정 </Button>
      </Container>
      {/* 본인의 회원정보라면 */}
    </>
  );
};

export default Profile;
const Container = styled.div`
  margin: 1rem 2rem 2rem 2rem;
  & > .profileContent {
    margin-top: 1rem;
  }
`;
const MainProfile = styled.div`
  display: flex;
`;
const StyleTopProfileText = styled.div`
  margin-left: 1vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  & > span {
    font-size: 28px;
  }
  /* border: 1px solid; */
`;

const StyleDogBab = styled.div`
  display: flex;
  border: 1px solid #dedede;
  border-radius: 5px;
  width: 80%;
  margin-top: 20px;
  justify-content: space-around;
  padding: 10px 20px;
  & > div > span {
    color: red;
  }
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`;

const DogCoin = styled.div`
  margin-top: 1rem;
  display: flex;
  & > span {
    color: #a59d52;
  }
`;

const Button = styled.button`
  margin-top: 2rem;
  width: 100%;
  background-color: #a59d52;
  color: white;
`;
