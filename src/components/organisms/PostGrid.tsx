import { useState } from 'react';
import * as S from './../../styles/organisms/PostGrid';
import ProfileBottomPost from '../molecules/ProfileBottomPost';
import { convertDate } from '../../utils/convertDate';
import { Plus } from '@phosphor-icons/react';
import ProfileApplyPost from '../molecules/ProfileApplyPost';
import ProfileReviewPost from '../molecules/ProfileReviewPost';
import { useNavigate } from 'react-router-dom';

// api/profile/notifications
// 산책시키기 => 공고글

// interface reviewProp {
//   id: number;
//   reviewContent: string;
// }

// type notification = {
//   id: number;
//   title: string;
//   start: string;
//   end: string;
//   dog: notiDog[];
// };

// interface applicationProp {
//   id: number;
//   aboutMe: string;
//   certification: string;
//   experience: string;
// }
interface notiDog {
  breed: string;
  age: number;
  image: string;
}

interface NotificationProps {
  id: number;
  title: string;
  start: string;
  end: string;
  dog: notiDog;
}
interface ApplicationProps {
  id: number;
  aboutMe: string;
  certification: string;
  experience: string;
}
interface ReviewProps {
  id: number;
  reviewContent: string;
  reviewTime: string;
  writerImg: string;
}
type postProps = {
  notificationList: NotificationProps[] | null;
  applicationList: ApplicationProps[] | null;
  reviewList: ReviewProps[] | null;
};

const PostGrid = ({
  notificationList,
  applicationList,
  reviewList,
}: postProps) => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState<String>('notification');
  // console.log('applicationList', applicationList);
  // TODO :: 지원서, 리뷰 CSS 만들기
  const reviews = reviewList;
  const applications = applicationList;
  const notifications = notificationList;

  // const [postList, setPostList] = useState(notifications);

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };

  const handlePlusClick = () => {
    navigate('/write');
  };

  const handleNotiClick = (postId: number) => {
    navigate(`/notification/${postId}`);
  };
  return (
    <S.Container>
      <S.Banner>
        <button
          className={`button ${
            activeButton === 'notification' ? 'active' : ''
          }`}
          onClick={() => handleButtonClick('notification')}
        >
          산책시키기
        </button>
        <button
          className={`button ${activeButton === 'application' ? 'active' : ''}`}
          onClick={() => handleButtonClick('application')}
        >
          지원서
        </button>
        <button
          className={`button ${activeButton === 'review' ? 'active' : ''}`}
          onClick={() => handleButtonClick('review')}
        >
          리뷰
        </button>
      </S.Banner>
      <S.ListContainer>
        {/* TO DO :: 게시글 추가 페이지로 이동할 수 있게 */}
        {activeButton === 'notification' ? (
          <S.Button onClick={handlePlusClick}>
            <Plus size="32" />
          </S.Button>
        ) : (
          ''
        )}
        {notifications && activeButton === 'notification' ? (
          <S.List>
            {notifications.map((post) => (
              <S.ListWrapper
                onClick={() => handleNotiClick(post.id)}
                key={post.id}
              >
                <ProfileBottomPost
                  breed={post.dog.breed}
                  age={post.dog.age}
                  title={post.title}
                  src={post.dog.image}
                  date={convertDate({
                    startDate: post.start,
                    endDate: post.end,
                  })}
                />
              </S.ListWrapper>
            ))}
          </S.List>
        ) : (
          ''
        )}
        {applications && activeButton === 'application' ? (
          <S.List>
            {applications.map((post) => (
              <S.ListWrapper key={post.id}>
                <ProfileApplyPost
                  aboutMe={post.aboutMe}
                  certification={post.certification}
                  experience={post.experience}
                />
              </S.ListWrapper>
            ))}
          </S.List>
        ) : (
          ''
        )}
        {reviews && activeButton === 'review' ? (
          <S.List>
            {reviews.map((post) => (
              <S.ListWrapper key={post.id}>
                <ProfileReviewPost
                  reviewContent={post.reviewContent}
                  reviewTime={post.reviewTime}
                  writerImg={post.writerImg}
                />
              </S.ListWrapper>
            ))}
          </S.List>
        ) : (
          ''
        )}
      </S.ListContainer>
    </S.Container>
  );
};
export default PostGrid;
