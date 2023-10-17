import { CheckCircle } from '@phosphor-icons/react';
import * as S from '../../styles/organisms/ReviewBox';
import React, { useCallback, useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Image from '../atoms/Image';
import { useNavigate } from 'react-router-dom';

const dogOwner = [
  '온순해요',
  '공고대로에요',
  '강아지 용품 준비가\n잘 되어있어요',
  '훈련되어 있어요',
];

const partTimeWorker = [
  '친절해요',
  '소통이 잘 돼요',
  '약속을 잘 지켜주셨어요',
  '강아지를 잘 챙겨주셨어요',
];

const ReviewBox = () => {
  const user = 'dogOwner';
  const [sliderValue, setSliderValue] = useState(39.5);
  const [reviewList, setReviewList] = useState([false, false, false, false]);
  const [review, setReview] = useState('');

  const handleSliderChange = useCallback(
    (e: any) => {
      setSliderValue(e);
    },
    [sliderValue],
  );

  const navigate = useNavigate();
  const handleReviewSubmit = () => {
    navigate('/submit');
  };

  const handleCheckboxClick = useCallback(
    (idx: number) => {
      const newReviewList = [...reviewList];
      newReviewList[idx] = !newReviewList[idx];
      setReviewList(newReviewList);
    },
    [reviewList],
  );

  // Todo: 사용자 프로필 데이터 받아오기

  return (
    <S.Container>
      <div>
        <S.Title>사용자에 대해 간단히 리뷰를 작성해주세요</S.Title>
        <S.ProfileWrapper>
          <S.ProfileImage
            src="/images/dog-sample.png"
            alt="리뷰하기 프로필"
            size="4"
            className="review__profile"
          />
          <span className="dog__name">복슬이</span>
        </S.ProfileWrapper>
        <div>
          <S.CheckboxTable>
            <S.CheckboxTr>
              <td>
                <S.CheckboxLabel onClick={() => handleCheckboxClick(0)}>
                  {reviewList[0] ? (
                    <CheckCircle
                      color="#a59d52"
                      weight="fill"
                      size={20}
                      className="check__icon"
                      style={{ marginLeft: '1rem', paddingRight: '0.5rem' }}
                    />
                  ) : (
                    <CheckCircle
                      color="#a59d52"
                      size={20}
                      className="check__icon"
                      style={{ marginLeft: '1rem', paddingRight: '0.5rem' }}
                    />
                  )}
                  {user === 'dogOwner' ? dogOwner[0] : partTimeWorker[0]}
                </S.CheckboxLabel>
              </td>
              <td>
                <S.CheckboxLabel onClick={() => handleCheckboxClick(1)}>
                  {reviewList[1] ? (
                    <CheckCircle
                      color="#a59d52"
                      weight="fill"
                      size={20}
                      className="check__icon"
                      style={{ marginLeft: '1rem', paddingRight: '0.5rem' }}
                    />
                  ) : (
                    <CheckCircle
                      color="#a59d52"
                      size={20}
                      className="check__icon"
                      style={{ marginLeft: '1rem', paddingRight: '0.5rem' }}
                    />
                  )}
                  {user === 'dogOwner' ? dogOwner[1] : partTimeWorker[1]}
                </S.CheckboxLabel>
              </td>
            </S.CheckboxTr>
            <S.CheckboxTr>
              <td>
                <S.CheckboxLabel onClick={() => handleCheckboxClick(2)}>
                  {reviewList[2] ? (
                    <CheckCircle
                      color="#a59d52"
                      weight="fill"
                      size={20}
                      className="check__icon"
                      style={{ marginLeft: '1rem', paddingRight: '0.5rem' }}
                    />
                  ) : (
                    <CheckCircle
                      color="#a59d52"
                      size={20}
                      className="check__icon"
                      style={{ marginLeft: '1rem', paddingRight: '0.5rem' }}
                    />
                  )}
                  {user === 'dogOwner' ? dogOwner[2] : partTimeWorker[2]}
                </S.CheckboxLabel>
              </td>
              <td>
                <S.CheckboxLabel onClick={() => handleCheckboxClick(3)}>
                  {reviewList[3] ? (
                    <CheckCircle
                      color="#a59d52"
                      weight="fill"
                      size={20}
                      className="check__icon"
                      style={{ marginLeft: '1rem', paddingRight: '0.5rem' }}
                    />
                  ) : (
                    <CheckCircle
                      color="#a59d52"
                      size={20}
                      className="check__icon"
                      style={{ marginLeft: '1rem', paddingRight: '0.5rem' }}
                    />
                  )}
                  {user === 'dogOwner' ? dogOwner[3] : partTimeWorker[3]}
                </S.CheckboxLabel>
              </td>
            </S.CheckboxTr>
          </S.CheckboxTable>
        </div>
        <S.ReviewWrapper>
          <S.ReviewTitle>리뷰 작성</S.ReviewTitle>
          <S.ReviewContent
            placeholder="솔직한 후기를 작성해주세요!"
            name="review"
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></S.ReviewContent>
        </S.ReviewWrapper>
        <S.ReviewSliderWrapper>
          <S.ReviewSliderTitle className="trust">
            개밥그릇 - 신뢰지수{' '}
          </S.ReviewSliderTitle>
          <Slider
            value={sliderValue}
            className="slider"
            onChange={handleSliderChange}
            styles={{
              track: { backgroundColor: '#a59d52' }, // 트랙 배경색
              handle: { backgroundColor: '#a59d52', borderColor: '#a59d52' }, // 핸들 배경색
            }}
          />
          <S.ReviewBowl>
            {sliderValue}%
            <Image
              src="/images/dog-bowl.png"
              alt="개밥그릇"
              className="dog__bowl"
            />
          </S.ReviewBowl>
        </S.ReviewSliderWrapper>
        <S.ButtonWrapper onClick={handleReviewSubmit}>
          <S.Button>리뷰 등록하기</S.Button>
        </S.ButtonWrapper>
      </div>
    </S.Container>
  );
};

export default React.memo(ReviewBox);
