import * as S from '../../styles/organisms/DetialNotification';
import { MapPin, CaretCircleRight, Plus } from '@phosphor-icons/react';
import DescriptionBoxNoti from '../atoms/DescriptionBoxNoti';
import BottomNavBar from '../molecules/BottomNavBar';
import DogProfile from './DogProfile';
import kakaoLocation from '../../utils/kakaoLocation';
import { useEffect, useState } from 'react';
import { convertDate } from '../../utils/convertDate';
import { comma } from '../../utils/convert';

interface NotificationProps {
  data: {
    title: string;
    isMine: boolean;
    start: string;
    end: string;
    lat: number;
    lng: number;
    notificationId: number;
    significant: string;
    coin: number;
    dog: dogProp;
  };
}

interface dogProp {
  breed: string;
  dogId: number;
  image: string;
  name: string;
  size: string;
}

function DetailNotification({ data }: NotificationProps) {
  const notiData = data;
  const [address, setAddress] = useState('');
  const [locate, setLocate] = useState({
    lng: notiData.lng,
    lat: notiData.lat,
  });
  console.log('locate', locate);
  useEffect(() => {
    const fetchKakaoAddress = async () => {
      try {
        const res = await kakaoLocation(locate);
        const kakaoAddress = res?.data?.documents[0]?.address_name;
        setAddress(kakaoAddress || '주소를 불러오고 있어요!');
      } catch (error: any) {
        console.error(error);
      }
    };
    fetchKakaoAddress();
  }, []);
  return (
    <>
      <S.NotiTitle>
        {/* <S.TitleInput value={notiData.title} /> */}
        <S.Title>{notiData.title}</S.Title>
      </S.NotiTitle>

      <DescriptionBoxNoti>
        <S.MainContainer>
          {/* {notiData.isMine ? <div className=''> 공고글 수정하기 </div> : ''} */}
          {/* TODO::age는 하드코딩했음 추후 api수정되면 바꿔야함*/}
          <DogProfile
            img={notiData.dog.image}
            name={notiData.dog.name}
            breed={notiData.dog.breed}
            age={3}
            size={notiData.dog.size}
          />
          {/* 시간위치 컴포넌트 */}
          <S.TimeLocationContainer>
            <S.LocationContainer>
              <MapPin fill="red" weight="fill" size={28} />
              <span className="title"> 산책 위치</span>
              <span className="map">{address}</span>
            </S.LocationContainer>
            <S.TimeContainer>
              <div className="title"> 희망 시간 </div>
              <div className="time">
                <CaretCircleRight weight="fill" color="#D6CFA5" />
                <span>
                  {convertDate({
                    startDate: notiData.start,
                    endDate: notiData.end,
                  })}
                </span>
                {/* <Plus onClick={onClickDateModal} size={16} /> */}
              </div>
            </S.TimeContainer>
          </S.TimeLocationContainer>
          <S.Container>
            <div className="specificity">
              <div className="title"> 특이사항 </div>

              <textarea
                className="post"
                value={notiData.significant}
              ></textarea>
            </div>
            <div className="amount">
              <span className="title"> 지불금액</span>
              <div className="price">
                <span className="coin">{comma(notiData.coin)}</span>
                <span>멍</span>
              </div>
            </div>
          </S.Container>
          <S.ButtonContainer>
            {/* TODO:: 지원자보기, 지원하기에 대한 라우팅 필요 */}
            {notiData.isMine ? (
              <S.Button>지원자 보기</S.Button>
            ) : (
              <S.Button>지원하기</S.Button>
            )}
          </S.ButtonContainer>
        </S.MainContainer>
      </DescriptionBoxNoti>
      <BottomNavBar />
    </>
  );
}

export default DetailNotification;
