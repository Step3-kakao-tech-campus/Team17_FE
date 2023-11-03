import * as S from '../../styles/organisms/ReviewBox';
import React, { useCallback, useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Image from '../atoms/Image';
import { useNavigate } from 'react-router-dom';
// import { useMutation } from 'react-query';
// import { PostReview } from '../../apis/review';
import CheckboxLabel from '../molecules/CheckboxLabel';
import { useMutation } from 'react-query';
import { PostReview } from '../../apis/review';

const feedbackMessage = {
  dogOwner: [
    '온순해요',
    '공고대로에요',
    '강아지 용품 준비가\n잘 되어있어요',
    '훈련되어 있어요',
  ],
  partTimeWorker: [
    '친절해요',
    '소통이 잘 돼요',
    '약속을 잘 지켜주셨어요',
    '강아지를 잘 챙겨주셨어요',
  ],
};

const ReviewBox = () => {
  const user = 'dogOwner';
  const [sliderValue, setSliderValue] = useState(39.5);
  const [reviewList, setReviewList] = useState([false, false, false, false]);
  const [review, setReview] = useState('');
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: PostReview,
  });

  const handleSliderChange = useCallback(
    (e: any) => {
      setSliderValue(e);
    },
    [sliderValue],
  );

  const handleCheckboxClick = useCallback(
    (idx: number) => {
      const newReviewList = [...reviewList];
      newReviewList[idx] = !newReviewList[idx];
      setReviewList(newReviewList);
    },
    [reviewList],
  );

  // TODO: 서버 연결 확인 필요
  const handlePostReview = () => {
    const postReview = {
      memberId: 1,
      receiveMemberId: 2,
      reviewContent: review,
      reviewEval: {
        eval1: reviewList[0],
        eval2: reviewList[1],
        eval3: reviewList[2],
        eval4: reviewList[3],
      },
      notificationId: 1,
      dogBowl: 70,
    };

    mutate(postReview, {
      onSuccess: () => {
        alert('리뷰 등록 완료');
        navigate('/submit', {
          state: {
            push: '/',
            title: '리뷰 등록 완료!',
            buttonText: '홈으로 돌아가기',
          },
        });
      },
      onError: (err: any) => {
        if (err.status) {
          switch (err.status) {
            case 401:
              alert('이미 리뷰를 등록하였습니다.');
              break;
            default:
              alert('리뷰 등록에 실패했습니다.');
          }
        }
      },
    });
  };

  return (
    <S.Container>
      <div className="wrapper">
        <S.BottomContentWrapper>
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
                <tbody>
                  <S.CheckboxTr>
                    {new Array(2).fill('').map((_, i) => (
                      <CheckboxLabel
                        onClick={() => handleCheckboxClick(i)}
                        user={user}
                        data={reviewList[i]}
                        dogOwner={feedbackMessage.dogOwner[i]}
                        partTimeWorker={feedbackMessage.partTimeWorker[i]}
                        key={i}
                      />
                    ))}
                  </S.CheckboxTr>
                  <S.CheckboxTr>
                    {new Array(2).fill('').map((_, i) => (
                      <CheckboxLabel
                        onClick={() => handleCheckboxClick(i + 2)}
                        user={user}
                        data={reviewList[i + 2]}
                        dogOwner={feedbackMessage.dogOwner[i + 2]}
                        partTimeWorker={feedbackMessage.partTimeWorker[i + 2]}
                        key={i + 2}
                      />
                    ))}
                  </S.CheckboxTr>
                </tbody>
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
          </div>
          <div>
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
                  handle: {
                    backgroundColor: '#a59d52',
                    borderColor: '#a59d52',
                  }, // 핸들 배경색
                }}
              />
              <S.ReviewBowl>
                {sliderValue}%
                <Image
                  src="/images/dog-bowl.png"
                  alt="개밥그릇"
                  className="dog__bowl"
                  size="1.5"
                />
              </S.ReviewBowl>
            </S.ReviewSliderWrapper>

            <S.ButtonWrapper onClick={handlePostReview}>
              <S.Button>리뷰 등록하기</S.Button>
            </S.ButtonWrapper>
          </div>
        </S.BottomContentWrapper>
      </div>
    </S.Container>
  );
};

export default React.memo(ReviewBox);
