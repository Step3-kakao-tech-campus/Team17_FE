import Image from '../atoms/Image';
import * as S from '../../styles/molecules/ChatListItem';
import { GrainsSlash } from '@phosphor-icons/react';

interface Chat {
    message: string;
    image: string;
    activate: string;
}

type ListItemProps = {
    chat: Chat;
    name: string;
};

const ChatListItem = ({ chat, name }: ListItemProps) => {
  const { message, image, activate } = chat;

  return (
    <S.Container>
      <S.ProfileImgWrapper>
        <Image src={image} alt="강아지 임시 이미지" />
      </S.ProfileImgWrapper>
        <S.TextWrapper>
          <div>
            <S.Dogname>
              {name}&nbsp; {/* 강아지 이름 */}
              <span>산책 현황 보기</span>&nbsp;
              {activate === 'yes' ? (
                <GrainsSlash size={10} color="#01c522" />
                ) : (
                  <GrainsSlash size={10} color="#3d3d3d" />
                )}
            </S.Dogname>
          </div>
          <div>
            <S.ListChatText>
              <span>{message}</span>
            </S.ListChatText>
          </div>
        </S.TextWrapper>
    </S.Container>
  );
};

export default ChatListItem;
