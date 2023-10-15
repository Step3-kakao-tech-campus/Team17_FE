type InputProps = {
  className?: string;
  placeholder: string;
  style?: React.CSSProperties;
};

const Input = ({ className, placeholder, style, ...props }: InputProps) => {
  return (
    <>
      <input
        className={`myStyle ${className}`}
        placeholder={placeholder}
        style={style}
        {...props}
      />
    </>
  );
};

export default Input;
