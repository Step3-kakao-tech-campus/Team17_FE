import InputGroup from '../molecules/InputGroup';
import useAuthInput from '../../hooks/useAuthInput';
import * as Form from '../../styles/organisms/UserInputForm';
import Footer from '../atoms/Footer';
import LinkText from '../atoms/LinkText';
import * as Link from '../../styles/atoms/Link';
import { useNavigate } from 'react-router-dom';
// import { register } from '../../apis/user';
import { useState } from 'react';
import Msg from '../atoms/Msg';

const RegisterForm = () => {
  const [error, setError] = useState('');
  const { value, handleOnChange, handleOnCheck, invalidCheck } = useAuthInput({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  // const registerReq = () => {
  //   register({
  //     email: value.email,
  //     password: value.password,
  //     username: value.username,
  //   })
  //     .then(() => {
  //       setError('');
  //       alert('회원가입 완료!\n 로그인이 필요합니다.');
  //       navigate('/login');
  //     })
  //     .catch((err: { request: { response: string } }) => {
  //       console.log(err.request.response);
  //       const errObject = JSON.parse(err.request.response);
  //       setError(errObject.error.message);
  //     });
  // };

  const navigate = useNavigate();

  const isValid = Object.values(invalidCheck).every((value) => value === true);

  return (
    <>
      <Form.Container>
        <Form.Title>회원가입</Form.Title>
        <div className="welcome__text">환영합니다!</div>
        <Form.Box>
          <InputGroup
            id="username"
            name="username"
            type="text"
            placeholder="이름"
            label="이름"
            value={value.username}
            onChange={handleOnChange}
            onBlur={() => handleOnCheck('username', value.username)}
            invalid={invalidCheck}
            className="username"
          />
          <InputGroup
            id="email"
            name="email"
            type="email"
            placeholder="이메일"
            label="이메일"
            value={value.email}
            onChange={handleOnChange}
            onBlur={() => handleOnCheck('email', value.email)}
            invalid={invalidCheck}
            className="email"
          />
          <InputGroup
            id="password"
            name="password"
            type="password"
            placeholder="비밀번호"
            label="비밀번호"
            value={value.password}
            onChange={handleOnChange}
            onBlur={() => handleOnCheck('password', value.password)}
            invalid={invalidCheck}
            className="password"
          />
          <InputGroup
            id="passwordConfirm"
            name="passwordConfirm"
            type="password"
            placeholder="비밀번호 확인"
            label="비밀번호 확인"
            value={value.passwordConfirm}
            onChange={handleOnChange}
            onBlur={() =>
              handleOnCheck('passwordConfirm', value.passwordConfirm)
            }
            invalid={invalidCheck}
            className="passwordConfirm"
          />
          {error !== '' ? (
            <Msg message={error} className="login-error" />
          ) : null}
          <Form.Button
            onClick={() => {
              // api 회원 가입 요청
              // registerReq();
              console.log('회원가입');
            }}
            disabled={!isValid}
          >
            회원가입
          </Form.Button>
          <Link.TextContainer>
            <LinkText to="/signin" text="로그인" className="login__text" />
          </Link.TextContainer>
        </Form.Box>
      </Form.Container>
      <Footer />
    </>
  );
};

export default RegisterForm;
