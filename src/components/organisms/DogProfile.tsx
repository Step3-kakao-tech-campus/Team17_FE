import * as S from '../../styles/organisms/DogProfile';
import Image from '../atoms/Image';
import DogSizeImage from '../atoms/DogSizeImage';

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

type DogProfileProps = {
  profile?: ProfileProps;
  onClickDogSelectModal: () => void; // 클릭 시 DogSelectModal을 열기 위한 함수
};

const DogProfile = ({ profile, onClickDogSelectModal }: DogProfileProps) => {
  const { name, breed, age } = profile || {};

  const handleImageClick = () => {
    // DogSelectModal 열기 함수 호출
    onClickDogSelectModal();
  };

  return (
    <>
      <S.Container>
        <S.Dog>
          <div className="image" onClick={handleImageClick}>
            <Image
              src={profile?.image}
              alt="강아지 예시"
              style={{
                border: '1px solid #e2e2e2', // 테두리 스타일 설정
                boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.2)', // 그림자 스타일 설정
              }}
            />
          </div>
          <S.DogSpan>
            <div className="block">
              <span className="title"> 이름 </span>
              <span> {name || ''}</span>
            </div>
            <div className="block">
              <span className="title"> 견종 </span>
              <span> {breed || ''}</span>
            </div>
            <div className="block">
              <span className="title"> 나이 </span>
              <span> {age !== -1 ? `${age}살` : ''}</span>
            </div>
          </S.DogSpan>
        </S.Dog>
        <S.DogSize>
          <span> 반려견 크기 </span>
          <S.Images>
            <DogSizeImage children="소형견" mark={profile?.size === '소형견'} />
            <DogSizeImage children="중형견" mark={profile?.size === '중형견'} />
            <DogSizeImage children="대형견" mark={profile?.size === '대형견'} />
          </S.Images>
        </S.DogSize>
      </S.Container>
    </>
  );
};

export default DogProfile;
