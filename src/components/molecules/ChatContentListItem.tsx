import * as S from '../../styles/molecules/ChatListItem';
import { Box, Card, CardContent, Typography } from '@mui/material';

interface ChatContent {
  id: number;
  content: string;
  messageType: string;
  memberId: number;
}

type ChatListItemProps = {
  chatcontent: ChatContent;
};

const ChatListItem = ({ chatcontent }: ChatListItemProps) => {
  const { content } = chatcontent;
  return (
    <S.Container>
      <Box padding={`10px`}>
        <Card sx={{ backgroundColor: '#facc87' }}>
          <CardContent>
            <Typography>{content}</Typography>
          </CardContent>
        </Card>
      </Box>
    </S.Container>
  );
};

export default ChatListItem;
