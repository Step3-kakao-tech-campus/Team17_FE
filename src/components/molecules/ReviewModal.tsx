import { useState, PropsWithChildren, useEffect } from 'react';
import * as S from '../../styles/molecules/ReviewModal';
import { X } from '@phosphor-icons/react';
import React from 'react';
import { getNotReviewed } from '../../apis/review';
import Spinner from '../atoms/Spinner';
import { getNotificationById } from '../../apis/notification';
import NotReview from '../atoms/NotReview';
import { useNavigate } from 'react-router-dom';
type WalkStatus = {
  userId: number;
  receiveMemberId: number;
  walkId: number;
  walkStatus: string;
  notificationId: number;
  reviewed: boolean;
  master: boolean;
};

type ModalDefaultType = {
  onClickToggleModal: () => void;
};

type ReviewProp = {
  userId: number;
  dog: dogProp;
  start: string;
  end: string;
  title: string;
  walkId: number;
  receiveMemberId: number;
};
type dogProp = {
  image: string;
};

export default function ReviewModal({
  onClickToggleModal,
}: PropsWithChildren<ModalDefaultType>) {
  const [data, setData] = useState<WalkStatus[] | undefined>([]);
  const [notiData, setNotiData] = useState<any>([]);
  const navigate = useNavigate();

  // const handleReviewClick = () => {
  //   // navigate('/')
  // };

  useEffect(() => {
    getNotReviewed()
      .then((res) => {
        setData(res.data.response.walkStatusDTOS);
      })
      .catch((err) => {
        if (err.message === 'refresh') {
          getNotReviewed()
            .then((res) => {
              setData(res.data.response);
            })
            .catch((err) => {
              if (err.status) {
                switch (err.status) {
                  case 400:
                    alert('회원가입이 안된 유저입니다.');
                    navigate('/signup');
                    break;
                  default:
                    alert('미작성 리뷰 리스트를 불러오는데 실패하였습니다');
                    location.reload();
                    break;
                }
              }
            });
        } else if (err.status) {
          switch (err.status) {
            case 400:
              alert('회원가입이 안된 유저입니다.');
              navigate('/signup');
              break;
            default:
              alert('미작성 리뷰 리스트를 불러오는데 실패하였습니다');
              location.reload();
              break;
          }
        }
      });
  }, []);
  const handleApiError = (error: any) => {
    if (error.status) {
      switch (error.status) {
        case 400:
          alert('회원가입이 안된 유저입니다.');
          navigate('/signup');
          break;
        default:
          alert('미작성 리뷰 리스트를 불러오는데 실패하였습니다');
          location.reload();
          break;
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getNotReviewed();
        setData(response.data.response.walkStatusDTOS);
        // console.log('미작성리뷰들', response);

        // getNotificationById를 호출하는 Promise 배열을 생성합니다.
        const promises = response.data.response.walkStatusDTOS.map(
          (review: any) => getNotificationById(review.notificationId),
        );

        // Promise.all을 사용하여 모든 Promise가 완료될 때까지 대기합니다.
        const results = await Promise.all(promises);

        // results에는 각각의 Promise에서 반환한 데이터가 들어있습니다.
        setNotiData(results.map((result) => result.data.response));
      } catch (error: any) {
        if (error.message === 'refresh') {
          try {
            const response = await getNotReviewed();
            setData(response.data.response);
          } catch (refreshError) {
            handleApiError(refreshError);
          }
        } else {
          handleApiError(error);
        }
      }
    };

    fetchData();
  }, []);

  const handleReviewWrite = (
    memberId: number,
    walkId: number,
    userId: number,
    notificationId: number,
    master: boolean,
  ) => {
    navigate('/review', {
      state: {
        walkId: walkId,
        receiveMemberId: memberId,
        userId: userId,
        notificationId: notificationId,
        master: master,
      },
    });
  };
  // console.log('data', notiData);

  return (
    <S.ModalContainer>
      <S.DialogBox>
        {data && notiData ? (
          <>
            <S.TopContainer>
              <div></div>{' '}
              {data.length === 0 ? (
                <span>미작성 리뷰가 없어요!</span>
              ) : (
                <span>작성하지 않은 리뷰가 있어요!</span>
              )}{' '}
              <X
                className="cancel"
                size={30}
                color="#6D6D6E"
                onClick={() => onClickToggleModal()}
              />
            </S.TopContainer>
            <S.ReviewContainer>
              {notiData ? (
                notiData.map((review: ReviewProp, idx: number) => (
                  <NotReview
                    key={data[idx].notificationId}
                    image={review.dog.image}
                    start={review.start}
                    end={review.end}
                    title={review.title}
                    onClick={() =>
                      handleReviewWrite(
                        data[idx].receiveMemberId,
                        data[idx].walkId,
                        data[idx].userId,
                        data[idx].notificationId,
                        data[idx].master,
                      )
                    }
                  />
                ))
              ) : (
                <Spinner />
              )}
            </S.ReviewContainer>
          </>
        ) : (
          <Spinner />
        )}
      </S.DialogBox>
      <S.Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      />
    </S.ModalContainer>
  );
}
