import { useState, ChangeEvent } from 'react';

interface InputState {
  name: string;
  specificity: string;
  age: string;
}

const useDogInput = (initialValue: InputState) => {
  const [value, setValue] = useState<InputState>(initialValue);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };
  const handleOnSpecChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };
  return { value, handleOnChange, handleOnSpecChange };
};

export default useDogInput;
