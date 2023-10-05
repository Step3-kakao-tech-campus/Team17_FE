import React from 'react';
import Photo from '../atoms/Photo';
import styled from 'styled-components';
type ProfileProps = {
  className: string;
};

// /api/profile
const Profile = ({ className }: ProfileProps) => {
  return (
    <>
      <StyleContainer>
        <StyleTopProfile>
          <Photo src="./images/onboard_dog.png" alt="본인프사"></Photo>
          <StyleTopProfileText>
            <span>SevenTeen</span>
            <StyleDogBab>
              <div>개밥그릇</div>
              <div>
                <span>72%</span>
                <Photo src="./images/paw.png" alt="개밥그릇"></Photo>
              </div>
            </StyleDogBab>
          </StyleTopProfileText>
        </StyleTopProfile>
        <StyleProfileContent>
          <span> 안녕하세요 저희는 17조~ 강아지를 좋아합니다!</span>
        </StyleProfileContent>
      </StyleContainer>
    </>
  );
};

export default Profile;
const StyleContainer = styled.div`
  margin: 10px 50px 20px 50px;
`;
const StyleTopProfile = styled.div`
  display: flex;
  height: 14vh;
  /* justify-content: space-around; */
  /* width: 96vw; */
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

const StyleProfileContent = styled.h1`
  display: block;
  height: 5vh;
  margin-top: 20px;
  /* border: 1px solid; */
  & > span {
  }
`;

const StyleDogBab = styled.div`
  display: flex;
  border: 1px solid #dedede;
  border-radius: 5px;
  width: 70%;
  height: 20px;
  margin-top: 20px;
  justify-content: space-around;
  padding: 10px;
`;
// "response":
// 		{
//         "id": 1,
//         "nickname": "Kevin",
// 				"profile_img": "https://~~.img23",
//         "profileContent": "안녕하세요~",
//         "dog_bowl": 50,
// 				"dogCoin" : 2400
//         "dogs": [
// 									{
// 										"id": 1,
// 	 									"image" : "basicProfile_47838475947393908393.png",
// 									},
// 									{
// 										"id": 2,
// 	 									"image" : "basicProfile_47838475947393908393.png",
// 									},
// 									{
// 										"id": 3,
// 	 									"image" : "basicProfile_47838475947393908393.png",
// 									},
// 								],
//     },
