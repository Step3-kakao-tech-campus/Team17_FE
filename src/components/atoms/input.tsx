type InputProps = {
  className?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ className, placeholder, value, onChange, ...props }: InputProps) => {
  return (
    <>
      <input className={`myStyle ${className}`} placeholder={placeholder} value={value} onChange={onChange}{...props}/>
    </>
  );
};

export default Input;
