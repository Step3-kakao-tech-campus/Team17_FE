import { useState, PropsWithChildren, useEffect } from 'react';
import * as S from '../../styles/molecules/ReviewModal';
import { CaretLeft, X } from '@phosphor-icons/react';

import React from 'react';
import { getNotReviewed } from '../../apis/review';
import Spinner from '../atoms/Spinner';
import { getNotificationById } from '../../apis/notification';
import NotReview from '../atoms/NotReview';
type WalkStatus = {
  userId: number;
  receiveMemberId: number;
  walkId: number;
  walkStatus: string;
  notificationId: number;
  reviewed: boolean;
};

type ModalDefaultType = {
  onClickToggleModal: () => void;
};

export default function ReviewModal({
  onClickToggleModal,
}: PropsWithChildren<ModalDefaultType>) {
  const [data, setData] = useState<WalkStatus[] | undefined>([]);
  const [notiData, setNotiData] = useState<any>([]);

  useEffect(() => {
    getNotReviewed()
      .then((res) => {
        console.log('review', res);
        setData(res.data.response.walkStatusDTOS);
      })
      .catch((err) => console.log('err', err));
  }, []);

  useEffect(() => {
    if (data && data.length > 0) {
      const promises = data.map((review) =>
        getNotificationById(review.notificationId),
      );

      Promise.all(promises)
        .then((results) => {
          setNotiData(results.map((result) => result.data.response)); // 예를 들어, data 필드에 결과가 있다고 가정
        })
        .catch((error) => {
          console.error('Error fetching notifications:', error);
          // setNotiData([]);
        });
    }
  }, [data]);
  console.log('notidata', notiData);
  // console.log('notiData', notiData.map());
  return (
    <S.ModalContainer>
      <S.DialogBox>
        {data ? (
          <>
            <S.TopContainer>
              <div></div>{' '}
              {data.length === 0 ? (
                <span>리뷰 작성이 완료되었습니다!</span>
              ) : (
                <span>아직 작성 안된 리뷰가 있어요!</span>
              )}{' '}
              <X
                size={30}
                color="#d3d3d3"
                onClick={() => onClickToggleModal()}
              />
            </S.TopContainer>
            <S.ReviewContainer>
              {/* {notiData ? (
                notiData.map((review, index) => {
                  <NotReview key={index} />;
                })
              ) : (
                <div>test</div>
              )} */}
              {/* {notiData.map((noti, index) => {
                <NotReview key={index} />;
              })} */}
              {/* <div>
                {notiData.map((index) => {
                  <div>index</div>;
                })}
              </div> */}
              {/* {notiData ? (
                notiData.map((review, index) => <NotReview key={index} />)
              ) : (
                <div>test</div>
              )} */}
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
