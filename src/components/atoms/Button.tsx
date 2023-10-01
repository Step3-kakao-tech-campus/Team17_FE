type InputProps = {
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const Input = ({ className, children, onClick, ...props }: InputProps) => {
  return (
    <>
      <button className={`myStyle ${className}`} onClick={onClick} {...props}>
        {children}
      </button>
    </>
  );
};

export default Input;
