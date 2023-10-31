import * as link from '../../styles/atoms/Link';

type LinkTextProps = {
  text: string;
  to: string;
  className?: string;
};

const LinkText = ({ text, to, className }: LinkTextProps) => {
  return (
    <span>
      <link.Text to={to} className={className}>
        {text}
      </link.Text>
    </span>
  );
};

export default LinkText;
