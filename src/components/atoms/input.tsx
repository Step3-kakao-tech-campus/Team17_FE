type InputProps = {
  className?: string;
  placeholder: string;
  value: string;
  style?: React.CSSProperties;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const Input = ({
  className,
  placeholder,
  value,
  onChange,
  style,
  ...props
}: InputProps) => {
  return (
    <>
      <input
        className={`myStyle ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={style}
        {...props}
      />
    </>
  );
};
export default Input;
