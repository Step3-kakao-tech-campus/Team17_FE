import Box from '../atoms/Box';
import * as InputBox from '../../styles/molecules/InputGroup';
import ErrorMsg from '../atoms/ErrorMsg';

type InputProps = {
  id: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
  label: string;
  placeholder: string;
  onBlur: Function;
  invalid: { [key: string]: string | boolean };
};

import { FocusEventHandler } from 'react';

const InputGroup = ({
  id,
  name,
  type,
  value,
  onChange,
  className,
  label,
  placeholder,
  onBlur,
  invalid,
}: InputProps) => {
  return (
    <Box className={className}>
      <InputBox.Label htmlFor={id}>{label}</InputBox.Label>
      <InputBox.Input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur as FocusEventHandler<HTMLInputElement>}
      />
      <ErrorMsg errorMsg={invalid} name={name} />
    </Box>
  );
};

export default InputGroup;
