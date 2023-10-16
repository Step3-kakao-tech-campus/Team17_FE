type InputProps = {
  className: string;
  children: React.ReactNode;
};

const Input = ({ className, children, ...props }: InputProps) => {
  return (
    <>
      <input className={`myStyle ${className}`} {...props}>
        {children}
      </input>
    </>
  );
};

export default Input;
