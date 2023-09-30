import { MouseEventHandler } from 'react';
import * as link from '../../styles/atoms/Link';

type LinkTextProps = {
  text: string;
  to: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

const LinkText = ({ text, to, className, onClick }: LinkTextProps) => {
  return (
    <span>
      <link.Text
        to={to}
        className={className}
        onClick={text === '로그인' || text === '로그아웃' ? onClick : undefined}
      >
        {text}
      </link.Text>
    </span>
  );
};

export default LinkText;
