import * as S from '../../styles/organisms/DetialNotification';
import { MapPin, CaretCircleRight, Plus } from '@phosphor-icons/react';
import DescriptionBoxNoti from '../atoms/DescriptionBoxNoti';
import BottomNavBar from '../molecules/BottomNavBar';

function DetailNotification() {
  return (
    <>
      <S.NotiTitle>
        <S.TitleInput
          value="테스트"
          //   onChange={(e) => setInputTitleValue(e.target.value)}
          //   placeholder="제목을 입력해 주세요"
        />
      </S.NotiTitle>

      <DescriptionBoxNoti>
        <S.MainContainer>
          {/* <DogProfile
            profile={dogProfile}
            onClickDogSelectModal={onClickDogModal}
          /> */}
          {/* 시간위치 컴포넌트 */}
          <S.TimeLocationContainer>
            <S.LocationContainer>
              <MapPin fill="red" weight="fill" size={28} />
              <span className="title"> 산책 위치</span>
              {/* <span className="map" onClick={onClickLocationModal}>
                {' '}
                {address}
              </span> */}
            </S.LocationContainer>
            <S.TimeContainer>
              <div className="title"> 희망 시간 </div>
              <div className="time">
                <CaretCircleRight weight="fill" color="#D6CFA5" />
                <span>
                  데이터패칭
                  {/* {convertDate({
                    startDate: timeRange.startTime,
                    endDate: timeRange.endTime,
                  })} */}
                </span>
                {/* <Plus onClick={onClickDateModal} size={16} /> */}
              </div>
            </S.TimeContainer>
          </S.TimeLocationContainer>
          <S.Container>
            <div className="specificity">
              <div className="title"> 특이사항 </div>

              {/* <textarea
              className="post"
              placeholder="ex) 강아지 똥은 꼭 잘 치워주세요!"
              value={walkSpecificity}
              onChange={(e) => setWalkSpecificity(e.target.value)}
            ></textarea> */}
            </div>
            <div className="amount">
              <span className="title"> 지불금액</span>
              <div className="price">
                {/* <input
                className="input_price"
                value={comma(walkPrice)}
                onChange={(e) =>
                  setWalkPrice(Number(e.target.value.replace(/,/g, '')))
                }
              /> */}

                <span>멍</span>
              </div>
            </div>
          </S.Container>
          {/* <button onClick={postReq}>작성완료</button> */}
          <button>작성완료</button>
        </S.MainContainer>
      </DescriptionBoxNoti>
      <BottomNavBar />
    </>
  );
}

export default DetailNotification;
