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
  walkStatus: string;
}
interface ApplicationProps {
  id: number;
  aboutMe: string;
  certification: string;
  experience: string;
  title: string;
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
  isOwner: boolean;
};

const PostGrid = ({
  notificationList,
  applicationList,
  reviewList,
  isOwner,
}: postProps) => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState<String>('notification');
  // console.log('applicationList', applicationList);
  // TODO :: 지원서, 리뷰 CSS 만들기
  const reviews = reviewList;
  const applications = applicationList;
  const notifications = notificationList;

  console.log('nofitications', notifications);

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

  const handleApplyClick = (applicationId: number) => {
    navigate('/applyinquiry', {
      state: {
        applicationId: applicationId,
      },
    });
  };

  // 산책시키기
  const walkingPosts = notificationList?.filter(
    (post) => post.walkStatus === null,
  );
  console.log('산책시키기', walkingPosts);
  // 산책이력
  const walkingHistory = notificationList?.filter(
    (post) => post.walkStatus !== null,
  );
  console.log('산책이력', walkingHistory);
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
        {isOwner ? (
          <button
            className={`button ${
              activeButton === 'application' ? 'active' : ''
            }`}
            onClick={() => handleButtonClick('application')}
          >
            지원서
          </button>
        ) : (
          <button
            className={`button ${
              activeButton === 'application' ? 'active' : ''
            }`}
            onClick={() => handleButtonClick('application')}
          >
            산책 이력
          </button>
        )}
        <button
          className={`button ${activeButton === 'review' ? 'active' : ''}`}
          onClick={() => handleButtonClick('review')}
        >
          리뷰
        </button>
      </S.Banner>
      <S.ListContainer>
        {/* TO DO :: 게시글 추가 페이지로 이동할 수 있게 */}
        {isOwner && activeButton === 'notification' ? (
          <S.Button onClick={handlePlusClick}>
            공고 추가 <Plus className="plus" size="15" color="white" />
          </S.Button>
        ) : (
          ''
        )}
        {notifications && activeButton === 'notification' ? (
          <S.List>
            {/* 그냥 공고글 확인할 때는 notifications
            실제 개발 : walkingPosts */}
            {walkingPosts?.map((post) => (
              <S.ListWrapper
                onClick={() => handleNotiClick(post.id)}
                key={post.id}
              >
                <ProfileBottomPost
                  breed={post.dog.breed}
                  age={post.dog.age}
                  title={post.title}
                  src={post.dog.image}
                  isOwner={isOwner}
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
        {/* 지원서 */}
        {isOwner ? (
          applications && activeButton === 'application' ? (
            <S.List>
              {applications.map((post) => (
                <S.ListWrapper
                  key={post.id}
                  onClick={() => {
                    handleApplyClick(post.id);
                  }}
                >
                  <ProfileApplyPost
                    aboutMe={post.aboutMe}
                    certification={post.certification}
                    experience={post.experience}
                    title={post.title}
                  />
                </S.ListWrapper>
              ))}
            </S.List>
          ) : (
            ''
          )
        ) : // '산책시키기' 목록을 보여줄 때(isOwner가 false)
        notifications && activeButton === 'application' ? (
          <S.List>
            {walkingHistory?.map((post) => (
              <S.ListWrapper
                onClick={() => handleNotiClick(post.id)}
                key={post.id}
              >
                <ProfileBottomPost
                  breed={post.dog.breed}
                  age={post.dog.age}
                  title={post.title}
                  src={post.dog.image}
                  isOwner={isOwner}
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
