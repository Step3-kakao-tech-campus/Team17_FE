import * as S from './../../styles/organisms/Profile';
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
      <S.Container>
        <S.MainProfile>
          <Image
            src="./images/onboard_dog.png"
            alt="본인프사"
            size="6.5"
          ></Image>
          <S.StyleTopProfileText>
            <span>{profile.nickname}</span>
            <S.StyleDogBab>
              <span>개 밥그릇</span>
              <div>
                <span>{profile.dog_bowl} % </span>
                <Image src="./images/paw.png" alt="개밥그릇"></Image>
              </div>
            </S.StyleDogBab>
            <S.DogCoin>
              <span> 멍코인</span>
              <Image src="./images/paw1.png" alt="멍코인" size="1.5"></Image>
              <p> &nbsp;</p>
              <p> &nbsp;</p>
              <p> {profile.dogCoin} 멍</p>
            </S.DogCoin>
          </S.StyleTopProfileText>
        </S.MainProfile>
        <div className="profileContent"> {profile.profileContent}</div>
        <S.Button> 프로필 수정 </S.Button>
      </S.Container>
      {/* 본인의 회원정보라면 */}
    </>
  );
};

export default Profile;
