type InputProps = {
  className?: string;
  placeholder: string;
};

const Input = ({ className, placeholder, ...props }: InputProps) => {
  return (
    <>
      <input className={`myStyle ${className}`} placeholder={placeholder} {...props} />
    </>
  );
};

export default Input;
