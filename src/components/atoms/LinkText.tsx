import { useNavigate } from 'react-router-dom';
import * as link from '../../styles/atoms/Link';

type LinkTextProps = {
  text: string;
  to: string;
  className?: string;
};

const LinkText = ({ text, to, className }: LinkTextProps) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(to);
    if (to === '/') {
      window.location.reload();
    }
  };

  return (
    <span>
      <link.Text onClick={handleNavigate} className={className}>
        {text}
      </link.Text>
    </span>
  );
};

export default LinkText;
