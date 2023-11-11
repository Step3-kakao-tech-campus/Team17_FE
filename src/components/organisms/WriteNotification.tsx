import * as S from '../../styles/organisms/WriteNotification';
import DogProfile from './DogProfile';
import { MapPin, CaretCircleRight, Plus } from '@phosphor-icons/react';
import { useState, useCallback, useEffect } from 'react';
import DogSelectModal from '../molecules/DogSelectModal';
import DateModal from '../molecules/DateModal';
import { getDogProfile } from '../../apis/dog';
import useGeolocation from '../../hooks/useGeolocation';
import kakaoLocation from '../../utils/kakaoLocation';
import { LocationModal } from './LocationModal';
import { convertDate } from '../../utils/convertDate';
import { comma } from '../../utils/convert';
import { postNotification } from '../../apis/notification';
import { useNavigate } from 'react-router-dom';
import DescriptionBox from '../atoms/DescriptionBox';
import BackBar from '../molecules/BackBar';
// const dogProfile = {
//   dogId: 1,
//   image: 'img',
//   name: '복슬',
//   sex: 'MALE',
//   breed: '요크',
//   size: '중형견',
//   specificity: '안물어요',
//   age: 2,
//   memberId: 1,
// };
const WriteNotification = () => {
  const navigate = useNavigate();
  const [dogProfile, setDogProfile] = useState({
    dogId: -1,
    image: './images/dog_profile.png',
    name: '',
    sex: '',
    breed: '',
    size: '',
    specificity: '',
    age: -1,
    memberId: -1,
  });
  const [inputTitleValue, setInputTitleValue] = useState('');
  const [timeRange, setTimeRange] = useState<{
    startTime: string;
    endTime: string;
  }>({
    startTime: new Date().toISOString(),
    endTime: new Date().toISOString(),
  });
  const [walkPrice, setWalkPrice] = useState<number>(0);
  const [walkSpecificity, setWalkSpecificity] = useState('');

  const handleXYLocation = (coordinates: { x: number; y: number }) => {
    setLocate({
      lat: coordinates.y,
      lng: coordinates.x,
    });
  };

  const currentlocation = useGeolocation();
  const [address, setAddress] = useState('');
  const [locate, setLocate] = useState({
    lat: currentlocation.coordinates.lat,
    lng: currentlocation.coordinates.lng,
  });
  useEffect(() => {
    if (currentlocation.coordinates) {
      setLocate({
        lat: currentlocation.coordinates.lat,
        lng: currentlocation.coordinates.lng,
      });
    }
  }, [currentlocation.coordinates]);
  useEffect(() => {
    if (currentlocation.loaded && locate.lat !== 0 && locate.lng !== 0) {
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
    }
  }, [locate]);

  const [isDogModal, setDogModal] = useState<boolean>(false);
  const [selectedDog, setSelectedDog] = useState<number>(-1);
  const [isDateModal, setDateModal] = useState<boolean>(false);
  const handleStartEndTimes = (
    startTime: string | undefined,
    endTime: string | undefined,
  ) => {
    setTimeRange({
      startTime: startTime || timeRange.startTime,
      endTime: endTime || timeRange.endTime,
    });
  };
  const [isLocationModal, setLocationModal] = useState<boolean>(false);

  // 강아지 선택 모달
  const onClickDogModal = useCallback(() => {
    setDogModal(!isDogModal);
  }, [isDogModal]);

  // 선택한 강아지Id로 DataFetching
  const handleDogSelection = (dogId: number | null) => {
    if (dogId !== null) {
      setSelectedDog(dogId);
      getDogProfile(dogId)
        .then((res) => setDogProfile(res.data.response))
        .catch((err) => {
          if (err.message === 'refresh') {
            getDogProfile(dogId)
              .then((res) => setDogProfile(res.data.response))
              .catch((err) => {
                if (err.status) {
                  switch (err.status) {
                    case 400:
                      alert('등록된 강아지가 없습니다.');
                      navigate(-1);
                      break;
                    default:
                      navigate(-1);
                      break;
                  }
                }
              });
          } else if (err.status) {
            switch (err.status) {
              case 400:
                alert('등록된 강아지가 없습니다.');
                navigate(-1);
                break;
              default:
                navigate(-1);
                break;
            }
          }
        });
    }
  };
  // const dogProfile = {
  //   dogId: 1,
  //   image: 'img',
  //   name: '복슬',
  //   sex: 'MALE',
  //   breed: '요크',
  //   size: '중형견',
  //   specificity: '안물어요',
  //   age: 2,
  //   memberId: 1,
  // };

  // 시간 선택 Modal
  const onClickDateModal = useCallback(() => {
    setDateModal(!isDateModal);
  }, [isDateModal]);

  const onClickLocationModal = useCallback(() => {
    setLocationModal(!isLocationModal);
  }, [isLocationModal]);
  // 작성완료 버튼
  const postReq = async () => {
    // // 필수 정보가 누락되었을 때 함수 실행 중단
    if (!inputTitleValue || !selectedDog || !walkPrice || !walkSpecificity) {
      alert('필수 정보를 모두 입력해주세요.');
      return;
    }
    const data = {
      title: inputTitleValue,
      dogId: selectedDog,
      lat: locate.lat,
      lng: locate.lng,
      start: timeRange.startTime,
      end: timeRange.endTime,
      coin: walkPrice,
      significant: walkSpecificity,
    };
    postNotification(data)
      .then(() => {
        alert('제출완료!');
        navigate(-1);
      })
      .catch((err) => {
        if (err.message === 'refresh') {
          postNotification(data)
            .then(() => {
              alert('제출완료');
              navigate(-1);
            })
            .catch((err) => {
              if (err.status) {
                switch (err.status) {
                  case 400:
                    alert(err.data.error.message);
                    break;
                  default:
                    alert('정보를 다시 확인해 주세요');
                    break;
                }
              }
            });
        } else if (err.status) {
          switch (err.status) {
            case 400:
              alert(err.data.err.message);
              break;
            default:
              alert('정보를 다시 확인해 주세요');
              break;
          }
        }
      });
  };

  return (
    <S.TopContainer>
      <S.NotiTitle>
        <div className="title">
          <BackBar />
          <S.TitleInput
            value={inputTitleValue}
            onChange={(e) => setInputTitleValue(e.target.value)}
            placeholder="제목을 입력해 주세요"
          />
          <div className="blank">&nbsp;</div>
        </div>
      </S.NotiTitle>
      <div className="container">
        <DescriptionBox>
          <S.MainContainer>
            <DogProfile
              img={dogProfile.image}
              name={dogProfile.name}
              breed={dogProfile.breed}
              age={dogProfile.age}
              size={dogProfile.size}
              onClickDogSelectModal={onClickDogModal}
            />
            {/* 시간위치 컴포넌트 */}
            <S.TimeLocationContainer>
              <S.LocationContainer>
                <MapPin fill="red" weight="fill" size={24} />
                <span className="title"> 산책 위치</span>
                <span className="map" onClick={onClickLocationModal}>
                  {' '}
                  {address}
                </span>
              </S.LocationContainer>
              <S.TimeContainer>
                <div className="title"> 희망 시간 </div>
                <div className="time">
                  <CaretCircleRight
                    weight="fill"
                    color="#f84514"
                    className="time__icon"
                  />
                  <span>
                    {convertDate({
                      startDate: timeRange.startTime,
                      endDate: timeRange.endTime,
                    })}
                  </span>
                  <Plus
                    onClick={onClickDateModal}
                    size={16}
                    className="time-plus__icon"
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              </S.TimeContainer>
            </S.TimeLocationContainer>
            <S.Wrapper>
              <S.Container>
                <div className="specificity">
                  <div className="title"> 특이사항 </div>
                  <S.Content
                    placeholder="특이사항을 작성해주세요!"
                    name="specificity"
                    id="specificity"
                    className="post"
                    value={walkSpecificity}
                    onChange={(e) => setWalkSpecificity(e.target.value)}
                  ></S.Content>
                </div>
                <div className="amount">
                  <span className="title"> 지불금액</span>
                  <div className="price">
                    <input
                      className="input_price"
                      value={comma(walkPrice)}
                      onChange={(e) =>
                        setWalkPrice(Number(e.target.value.replace(/,/g, '')))
                      }
                    />
                    <span>멍</span>
                  </div>
                </div>
              </S.Container>
              <S.ButtonContainer>
                <S.Button onClick={postReq}> 작성 완료 </S.Button>
              </S.ButtonContainer>
            </S.Wrapper>
            {isDogModal && (
              <DogSelectModal
                onClickToggleModal={onClickDogModal}
                onDogSelection={handleDogSelection}
              ></DogSelectModal>
            )}
            {isDateModal && (
              <DateModal
                onClickToggleModal={onClickDateModal}
                setStartEndTimes={handleStartEndTimes}
              ></DateModal>
            )}

            {isLocationModal && (
              <LocationModal
                onClickToggleModal={onClickLocationModal}
                setXYCoordinates={handleXYLocation}
              ></LocationModal>
            )}
          </S.MainContainer>
        </DescriptionBox>
      </div>
    </S.TopContainer>
  );
};

export default WriteNotification;
