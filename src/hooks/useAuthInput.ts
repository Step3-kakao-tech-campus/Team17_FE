import { useState, ChangeEvent } from 'react';

const EMAIL_REGEX = new RegExp('^[a-zA-Z0-9_-]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+$');
const PW_REGEX = new RegExp(
  '^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',
);

interface InputState {
  email: string;
  username: string;
  password: string;
  passwordConfirm: string;
  [key: string]: string; // index signature
}

const useInput = (initialValue: InputState) => {
  const [value, setValue] = useState<InputState>(initialValue);
  const [invalidCheck, setInvalidCheck] = useState<InputState>(initialValue);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
    handleOnCheck(name, value);
  };

  const checkRegex = (inputName: string, inputValue: string) => {
    let result: string = 'true'; // change type to string and set default value to 'true'
    if (value[inputName].length === 0) {
      result = 'required';
    } else {
      switch (inputName) {
        case 'email':
          result = EMAIL_REGEX.test(inputValue) ? 'true' : 'invalidEmail'; // change boolean to string
          break;
        case 'username':
          result = 'true'; // change boolean to string
          break;
        case 'password':
          result = PW_REGEX.test(inputValue) ? 'true' : 'invalidPw'; // change boolean to string
          if (value['passwordConfirm']) {
            checkRegex('passwordConfirm', value['passwordConfirm']);
          }
          break;
        case 'passwordConfirm':
          result =
            inputValue === value['password'] ? 'true' : 'invalidConfirmPw'; // change boolean to string
          break;
        default:
          return;
      }
    }

    setInvalidCheck((prev) => ({ ...prev, [inputName]: result }));
  };

  const handleOnCheck = (inputName: string, inputValue: string) => {
    checkRegex(inputName, inputValue);
  };

  return { value, invalidCheck, handleOnChange, handleOnCheck };
};

export default useInput;
