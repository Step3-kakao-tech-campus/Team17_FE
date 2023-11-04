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
  isReceiverDogOwner: boolean;
  dogBowl: number;
};

export const PostReview = (info: ReviewProps) => {
  return instance.post(`api/review`, info);
};
