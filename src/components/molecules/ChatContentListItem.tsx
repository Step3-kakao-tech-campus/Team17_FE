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
  myuserId: number;
};

const ChatListItem = ({ chatcontent, myuserId }: ChatListItemProps) => {
  const { content } = chatcontent;

  return (
    <S.Container>
      {chatcontent.memberId === myuserId ? (
        <Box padding={`10px`} className="mine">
          <Card sx={{ backgroundColor: '#facc87' }}>
            <CardContent>
              <Typography>
                <S.TextContent className="mine"> {content}</S.TextContent>
              </Typography>
            </CardContent>
          </Card>
        </Box>
      ) : (
        <Box padding={`10px`} className="yours">
          <Card sx={{ backgroundColor: 'white' }}>
            <CardContent>
              <Typography>
                <S.TextContent className="yours"> {content}</S.TextContent>
              </Typography>
            </CardContent>
          </Card>
        </Box>
      )}
    </S.Container>
  );
};

export default ChatListItem;
