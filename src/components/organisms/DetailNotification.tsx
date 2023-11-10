import * as S from '../../styles/organisms/DetialNotification';
import { MapPin, CaretCircleRight } from '@phosphor-icons/react';
import DogProfile from './DogProfile';
import kakaoLocation from '../../utils/kakaoLocation';
import { useEffect, useState } from 'react';
import { convertDate } from '../../utils/convertDate';
import { comma } from '../../utils/convert';
import { useNavigate } from 'react-router-dom';
import DescriptionBox from '../atoms/DescriptionBox';
import BackBar from '../molecules/BackBar';

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
    userId: number;
  };
}

interface dogProp {
  breed: string;
  age: number;
  dogId: number;
  image: string;
  name: string;
  size: string;
}

function DetailNotification({ data }: NotificationProps) {
  const navigate = useNavigate();
  const notiData = data;
  const [address, setAddress] = useState('');
  const [locate, _setLocate] = useState({
    lng: notiData.lng,
    lat: notiData.lat,
  });
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
  // TODO :: 어떤식으로 값이 전달되어야하는지 확인하기
  // 지원하기
  const onApplyClick = () => {
    navigate(`/apply`, {
      state: {
        notificationId: notiData.notificationId,
        memberId: notiData.userId,
      },
    });
  };
  // 매칭리스트 조회
  const onViewApplyClick = () => {
    navigate('/matchlist', {
      state: {
        notificationId: notiData.notificationId,
      },
    });
  };

  return (
    <>
      <S.TopContainer>
        <S.NotiTitle>
          <S.Title>
            <div className="arrow">
              <BackBar />
            </div>
            <div className="subtitle">{notiData?.title}</div>
            <div className="blank">&nbsp;</div>
          </S.Title>
        </S.NotiTitle>

        <DescriptionBox>
          <S.MainContainer>
            {/* {notiData.isMine ? <div className=''> 공고글 수정하기 </div> : ''} */}
            <DogProfile
              img={notiData.dog.image || 'images/default_profile.png'}
              name={notiData.dog.name}
              breed={notiData.dog.breed}
              age={notiData.dog.age}
              size={notiData.dog.size}
              userId={notiData.userId}
            />
            {/* 시간위치 컴포넌트 */}
            <S.TimeLocationContainer>
              <S.LocationContainer>
                <MapPin fill="red" weight="fill" size={24} />
                <span className="title"> 산책 위치</span>
                <span className="map">{address}</span>
              </S.LocationContainer>
              <S.TimeContainer>
                <div className="title"> 희망 시간 </div>
                <div className="time">
                  <CaretCircleRight
                    weight="fill"
                    color="#f84514"
                    className="time__icon"
                  />
                  <span className="walking__time">
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
                <S.Content
                  placeholder="특이사항을 작성해주세요!"
                  name="specificity"
                  id="specificity"
                  className="post"
                  value={notiData.significant}
                  readOnly
                ></S.Content>
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
                <S.Button onClick={onViewApplyClick}>지원자 보기</S.Button>
              ) : (
                <S.Button onClick={onApplyClick}>지원하기</S.Button>
              )}
            </S.ButtonContainer>
          </S.MainContainer>
        </DescriptionBox>
      </S.TopContainer>
    </>
  );
}

export default DetailNotification;
