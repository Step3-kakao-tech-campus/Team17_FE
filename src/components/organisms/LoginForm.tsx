import InputGroup from '../molecules/InputGroup';
import useAuthInput from '../../hooks/useAuthInput';
import * as Form from '../../styles/organisms/UserInputForm';
import Footer from '../atoms/Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import LinkText from '../atoms/LinkText';
import * as Link from '../../styles/atoms/Link';
import React, { useState } from 'react';
import Msg from '../atoms/Msg';
import { CheckCircle } from '@phosphor-icons/react';
// import { setLocalStorageWithExp } from '../../utils/localStorage';
import { setCookie, setCookieWithExp } from '../../utils/cookie';
import { login } from '../../apis/user';
import PageLoading from '../atoms/PageLoading';
// import { setUser } from '../../store/slices/userSlice';
// import { useEffect } from 'react';

const LoginForm = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const [keepLogin, setKeepLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { value, handleOnChange, handleOnCheck, invalidCheck } = useAuthInput({
    email: '',
    password: '',
    username: '',
    passwordConfirm: '',
  });

  const searchParams = new URLSearchParams(location.search);
  const returnUrl = searchParams.get('returnUrl');

  const loginReq = () => {
    setIsLoading(true);
    login({
      email: value.email,
      password: value.password,
    })
      .then((res) => {
        setIsLoading(false);
        setError('');

        setCookie('refresh', res.data.response.refreshToken);

        keepLogin
          ? setCookieWithExp('user', res.data.response.accessToken, 1000 * 1440)
          : setCookie('user', res.data.response.accessToken);
        returnUrl ? navigate(returnUrl) : navigate('/');
      })
      .catch((error) => {
        setIsLoading(false);
        if (error?.status) {
          switch (error.status) {
            case 400:
              setError(error.data.error.message);
              break;
            default:
              alert('로그인에 실패했습니다.');
          }
        } else {
          loginReq();
        }
      });

    // msw 테스트용
    // fetch('/api/login').then(() => {
    //   setCookie('user', value.email, 1000 * 1440);
    //   keepLogin
    //     ? setLocalStorageWithExp('user', value.email, 1000 * 1440)
    //     : null;
    //   returnUrl ? navigate(returnUrl) : navigate('/');
    // });
    // navigate('/');
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && isValid) {
      // 엔터 키를 누르고 입력이 유효한 경우 로그인 함수 호출
      event.preventDefault();
      loginReq();
    }
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
  };

  const isValid =
    invalidCheck['email'] === true && invalidCheck['password'] === true;

  return (
    <>
      <Form.Container>
        <Form.Title>로그인</Form.Title>
        <div className="welcome__text">환영합니다!</div>
        <Form.Box onSubmit={handleFormSubmit}>
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
            className="login-email"
            onKeyPress={handleKeyPress}
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
            className="login-password"
            onKeyPress={handleKeyPress}
          />
          {error !== '' ? (
            <Msg message={error} className="login-error" />
          ) : null}
          <Form.Button
            onClick={() => {
              // api 로그인 요청
              loginReq();
            }}
            disabled={!isValid}
          >
            로그인
          </Form.Button>
          <div>
            <LinkText
              to="/"
              text="비회원으로 계속하기"
              className="go__no-member"
            />
          </div>
          <Link.TextContainer>
            <span
              onClick={() => setKeepLogin(!keepLogin)}
              className="login__check"
            >
              {keepLogin ? (
                <CheckCircle
                  color="#a59d52"
                  weight="fill"
                  size={18}
                  className="check__icon"
                />
              ) : (
                <CheckCircle
                  color="#a59d52"
                  size={18}
                  className="check__icon"
                />
              )}
              로그인 유지
            </span>
            <LinkText to="/signup" text="회원가입" className="register__text" />
          </Link.TextContainer>
        </Form.Box>
      </Form.Container>
      <Footer />
      {isLoading ? <PageLoading /> : null}
    </>
  );
};

export default React.memo(LoginForm);
