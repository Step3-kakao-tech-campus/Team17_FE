import { useState, ChangeEvent } from 'react';

const useInput = (initialValue: object) => {
  const [value, setValue] = useState(initialValue);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  return { value, handleOnChange };
};

export default useInput;
