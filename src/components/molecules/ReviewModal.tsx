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
      .catch((_err) =>
        alert('미작성 리뷰 리스트를 불러오는데 실패하였습니다.'),
      );
  }, []);

  useEffect(() => {
    if (data && data.length > 0) {
      const promises = data.map((review) =>
        getNotificationById(review.notificationId)
          .then((_res) => {
            // 정상 응답
          })
          .catch((error) => {
            // 토큰 만료로 인한 오류 발생 시 api 재요청
            if (error.message === 'refresh') {
              getNotificationById(review.notificationId);
            }
          }),
      );

      Promise.all<any>(promises)
        .then((results) => {
          setNotiData(results.map((result) => result.data.response)); // 예를 들어, data 필드에 결과가 있다고 가정
        })
        .catch((error) => {
          alert('미작성된 리뷰 리스트를 불러오는데 실패하였습니다.');
          console.error('Error fetching notifications:', error);
          // setNotiData([]);
        });
    }
  }, [data]);

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
