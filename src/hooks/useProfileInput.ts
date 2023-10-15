import { useState, ChangeEvent } from 'react';

interface InputState {
  profileContent: string;
  profileImage: string;
}

const useProfileInput = (initialValue: InputState) => {
  const [value, setValue] = useState<InputState>(initialValue);
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };
  return { value, handleOnChange };
};

export default useProfileInput;
