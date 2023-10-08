import ListItem from '../molecules/ListItem';
import { PlusCircle } from '@phosphor-icons/react';
import * as S from '../../styles/organisms/NotificationList';

const NotificationList = () => {
  const data = [
    {
      dog: {
        name: '복슬이',
        sex: 'male',
        breed: '리트리버',
        image: '/images/dog-sample.png',
      },
      title: '복슬이랑 재밌게 놀며 산책시켜주실 분 찾아요!',
      dog_bowl: '78',
      id: 1,
    },
    {
      dog: {
        name: '복슬이',
        sex: 'male',
        breed: '리트리버',
        image: '/images/dog-sample.png',
      },
      title: '복슬이랑 재밌게 놀며 산책시켜주실 분 찾아요!',
      dog_bowl: '78',
      id: 2,
    },
    {
      dog: {
        name: '복슬이',
        sex: 'male',
        breed: '리트리버',
        image: '/images/dog-sample.png',
      },
      title: '복슬이랑 재밌게 놀며 산책시켜주실 분 찾아요!',
      dog_bowl: '78',
      id: 3,
    },
    {
      dog: {
        name: '복슬이',
        sex: 'male',
        breed: '리트리버',
        image: '/images/dog-sample.png',
      },
      title: '복슬이랑 재밌게 놀며 산책시켜주실 분 찾아요!',
      dog_bowl: '78',
      id: 4,
    },
    {
      dog: {
        name: '복슬이',
        sex: 'male',
        breed: '리트리버',
        image: '/images/dog-sample.png',
      },
      title: '복슬이랑 재밌게 놀며 산책시켜주실 분 찾아요!',
      dog_bowl: '78',
      id: 5,
    },
    {
      dog: {
        name: '복슬이',
        sex: 'male',
        breed: '리트리버',
        image: '/images/dog-sample.png',
      },
      title: '복슬이랑 재밌게 놀며 산책시켜주실 분 찾아요!',
      dog_bowl: '78',
      id: 6,
    },
    {
      dog: {
        name: '복슬이',
        sex: 'male',
        breed: '리트리버',
        image: '/images/dog-sample.png',
      },
      title: '복슬이랑 재밌게 놀며 산책시켜주실 분 찾아요!',
      dog_bowl: '78',
      id: 7,
    },
  ];

  const handleAddNotification = () => {
    // 공고글 올리기 버튼 클릭 시 동작
    // 공고글 올리기 페이지로 이동
  };

  return (
    <S.Container>
      <S.ButtonWrapper>
        <S.AddItemButton onClick={handleAddNotification}>
          공고글 올리기
          <PlusCircle size={19} className="add__item" />
        </S.AddItemButton>
      </S.ButtonWrapper>
      {data.map((item) => (
        <ListItem
          key={item.id}
          dog={item.dog}
          title={item.title}
          dog_bowl={item.dog_bowl}
        />
      ))}
    </S.Container>
  );
};

export default NotificationList;
