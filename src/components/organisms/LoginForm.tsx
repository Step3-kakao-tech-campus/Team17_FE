import InputGroup from '../molecules/InputGroup';
import useAuthInput from '../../hooks/useAuthInput';
//import { useEffect } from "react";
import * as Form from '../../styles/organisms/RegisterForm';
import Footer from '../atoms/Footer';
import { useNavigate } from 'react-router-dom';
import LinkText from '../atoms/LinkText';
import * as Link from '../../styles/atoms/Link';
// import { login } from '../../apis/user';
// import { useDispatch } from 'react-redux';
// import { setUser } from '../../store/slices/userSlice';
import { useState } from 'react';
import Msg from '../atoms/Msg';
// import { setLocalStorageWithExp } from '../../utils/localStorage';

const LoginForm = () => {
  // const dispatch = useDispatch();
  const [error, setError] = useState('');
  const { value, handleOnChange, handleOnCheck, invalidCheck } = useAuthInput({
    email: '',
    password: '',
    username: '',
    passwordConfirm: '',
  });

  // const loginReq = () => {
  //   login({
  //     email: value.email,
  //     password: value.password,
  //   })
  //     .then((res: { headers: { authorization: any } }) => {
  //       setError('');
  //       dispatch(
  //         setUser({
  //           user: value.user,
  //         }),
  //       );
  //       //console.log(res.headers.authorization);
  //       setLocalStorageWithExp('user', res.headers.authorization, 1000 * 1440);
  //       navigate('/');
  //     })
  //     .catch((err: { request: { response: string } }) => {
  //       console.log(err.request.response);
  //       const errObject = JSON.parse(err.request.response);
  //       setError(errObject.error.message);
  //     });
  // };

  const navigate = useNavigate();

  const isValid = invalidCheck['email'] && invalidCheck['password'];

  return (
    <>
      <Form.Container>
        <Form.Title>kakao</Form.Title>
        <Form.Box>
          <InputGroup
            id="email"
            name="email"
            type="email"
            placeholder="이메일"
            label="이메일 (아이디)"
            value={value.email}
            onChange={handleOnChange}
            onBlur={handleOnCheck}
            invalid={invalidCheck}
            className="login-email"
          />
          <InputGroup
            id="password"
            name="password"
            type="password"
            placeholder="비밀번호"
            label="비밀번호"
            value={value.password}
            onChange={handleOnChange}
            onBlur={handleOnCheck}
            invalid={invalidCheck}
            className="login-password"
          />
          {error !== '' ? (
            <Msg message={error} className="login-error" />
          ) : null}
          <Form.Button
            onClick={() => {
              // api 로그인 요청
              // loginReq();
            }}
            disabled={!isValid}
          >
            로그인
          </Form.Button>
          <Link.SignUp>
            <LinkText to="/signup" text="회원가입" />
          </Link.SignUp>
        </Form.Box>
      </Form.Container>
      <Footer />
    </>
  );
};

export default LoginForm;
