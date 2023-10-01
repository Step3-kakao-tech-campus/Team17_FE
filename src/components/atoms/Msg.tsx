import * as Message from '../../styles/atoms/Msg';

interface MsgProps {
  message: string;
  className?: string;
}

const Msg = ({ message, className }: MsgProps) => {
  return (
    <Message.LoginError>
      <div className={className}>{message}</div>
    </Message.LoginError>
  );
};

export default Msg;
