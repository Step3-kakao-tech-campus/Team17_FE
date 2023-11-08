import * as Error from '../../styles/atoms/ErrorMsg';

type ErrorMsgType = {
  [key: string]: boolean | string;
};

const ERROR_MSG: ErrorMsgType = {
  required: '필수 정보입니다.',
  invalidEmail: '이메일 형식이 알맞지 않습니다.',
  invalidPw: '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.',
  invalidConfirmPw: '비밀번호가 일치하지 않습니다.',
  invalidUsername: '이름은 10글자 이하로 입력해주세요.',
};

type ErrorMsgProps = {
  errorMsg: { [key: string]: string | boolean };
  name: string;
};

// errorMsg : invalid
// interface InvalidState {
//   email: string | boolean;
//   username: string | boolean;
//   password: string | boolean;
//   passwordConfirm: string | boolean;
//   [key: string]: string | boolean; // index signature
// }
const ErrorMsg = ({ errorMsg, name }: ErrorMsgProps) => {
  const errorMessage = errorMsg[name] as string;
  return (
    <Error.Msg>{errorMsg[name] ? ERROR_MSG[errorMessage] : null}</Error.Msg>
  );
};

export default ErrorMsg;
