import { instance } from './index';

type ReviewProps = {
  memberId: number;
  receiveMemberId: number;
  reviewContent: string;
  reviewEval: {
    eval1: boolean;
    eval2: boolean;
    eval3: boolean;
    eval4: boolean;
  };
  notificationId: number;
  dogBowl: number;
};

type postReviewProps = {
  info: ReviewProps;
  walkId: number;
};

export const PostReview = ({ info, walkId }: postReviewProps) => {
  return instance.post(`api/review/${walkId}`, info);
};

export const getReview = (memberId: number) => {
  return instance.get(`api/review/${memberId}`);
};

export const getNotReviewed = () => {
  return instance.get('api/walk/notReviewed');
};
