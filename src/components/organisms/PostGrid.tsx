import { useState } from 'react';
import * as S from './../../styles/organisms/PostGrid';
import List from '../atoms/List';
import { convertDate } from '../../utils/convertDate';

// api/profile/notifications
// 산책시키기 => 공고글
type DetailDog = {
  breed: string;
  age: number;
  image: string;
};
type Dogs = {
  id: number;
  image: string;
};
type Post = {
  id: number;
  title: string;
  start: string;
  end: string;
  dog: DetailDog;
};
type postProps = {
  posts: {
    id: number;
    nickname: string;
    profile_img: string;
    profileContent: string;
    dog_bowl: number;
    dogCoin: number;
    dogs: Dogs[];
    notifications: Post[];
    application: Post[];
    review: Post[];
  };
};

const PostGrid = ({ posts }: postProps) => {
  const [activeButton, setActiveButton] = useState<String>('button1');
  const applications = posts.application;
  const notifications = posts.notifications;
  const reviews = posts.review;
  const [postList, setPostList] = useState(notifications);

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
    if (button === 'button1') {
      setPostList(notifications);
    } else if (button === 'button2') {
      setPostList(applications);
    } else if (button === 'button3') {
      setPostList(reviews);
    }
  };
  return (
    <S.Container>
      <S.Banner>
        <button
          className={`button ${activeButton === 'button1' ? 'active' : ''}`}
          onClick={() => handleButtonClick('button1')}
        >
          산책시키기
        </button>
        <button
          className={`button ${activeButton === 'button2' ? 'active' : ''}`}
          onClick={() => handleButtonClick('button2')}
        >
          지원서
        </button>
        <button
          className={`button ${activeButton === 'button3' ? 'active' : ''}`}
          onClick={() => handleButtonClick('button3')}
        >
          리뷰
        </button>
      </S.Banner>
      <S.ListContainer>
        {postList.map((post) => (
          <List
            breed={post.dog.breed}
            age={post.dog.age}
            title={post.title}
            src={post.dog.image}
            date={convertDate({
              startDate: post.start,
              endDate: post.end,
            })}
          />
        ))}
      </S.ListContainer>
    </S.Container>
  );
};

export default PostGrid;
