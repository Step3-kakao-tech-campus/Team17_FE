import { useState, ChangeEvent } from 'react';

interface InputState {
  image: string;
  name: string;
  sex: string;
  breed: string;
  size: string;
  specificity: string;
  age: number;
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
