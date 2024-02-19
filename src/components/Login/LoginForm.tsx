import React, { useEffect } from 'react';

import styled from 'styled-components';

import TextBox from '../UI/TextBox';
import Button from '../UI/Button';

import useAccessToken from '../../hooks/useAccessToken';
import useLoginFormStore from '../../hooks/useLoginFormStore';

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 88px 20px 124px 20px;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  form {
    width: 100%;
  }
`;

const LmsButton = styled(Button)`
  display: flex;
  height: 48px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 12px;
  border:none;
  background: #0147C8;
  color: #FFF;
  font-family: "SF Pro";
  font-size: 15px;
  font-style: normal;
  font-weight: 510;
  line-height: normal;
  letter-spacing: -0.6px;
`;

const KakaoButton = styled.button`
  display: flex;
  height: 48px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 12px;
  border:none;
  background: #F7E600;
  color:#3A1D1D;
  font-family: "SF Pro";
  font-size: 15px;
  font-style: normal;
  font-weight: 510;
  line-height: normal;
  letter-spacing: -0.6px;
`;

const BtnWrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  width:100%;
  gap:10px;
  margin-top:50px;
`;

const Details = styled.div`
  color: #CFCFCF;
  text-align: center;
  font-family: "SF Pro";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px; /* 146.154% */
  letter-spacing: -0.52px;
  margin-top:60px;
`;

export default function LoginForm() {
  const RestAPIKey = '641457a0e25cbce8346a2c6c48d7179a';
  const RedirectURL = 'http://3.35.50.94:4000/auth/kakao/callback';
  const KakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${RestAPIKey}&redirect_uri=${RedirectURL}&response_type=code`;

  const { setAccessToken } = useAccessToken();

  const [{
    email, password, valid, error, accessToken,
  }, store] = useLoginFormStore();

  useEffect(() => {
    if (accessToken) {
      setAccessToken(accessToken);
    }
  }, [accessToken]);

  const handleChangeEmail = (value: string) => {
    store.changeEmail(value);
  };

  const handleChangePassword = (value: string) => {
    store.changePassword(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    store.lmsLogin();
  };

  const handleClickKakaoLogin = () => {
    window.location.href = KakaoURL;
    store.kakaoLogin();
  };

  return (
    <Container>
      <img src="INUlogo.png" alt="INU logo" />
      <form onSubmit={handleSubmit}>
        <TextBox
          label="E-mail"
          placeholder="학번"
          value={email}
          onChange={handleChangeEmail}
        />
        <TextBox
          label="Password"
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={handleChangePassword}
        />
        <BtnWrapper>
          <LmsButton type="submit" disabled={!valid}>
            로그인
          </LmsButton>
          {error && (
            <p>로그인 실패</p>
          )}
        </BtnWrapper>
      </form>
      <KakaoButton onClick={handleClickKakaoLogin}>카카오톡으로 로그인</KakaoButton>
      <Details>
        로그인 정보는 포탈과 동일합니다.
        <br />
        (학생은 학번, 교원은 교번, 직원은 사번입니다.)
        <br />
        아이디 찾기 / 비밀번호 찾기는
        <br />
        PC에서 포탈을 이용하시기 바랍니다.
        <br />
      </Details>
    </Container>
  );
}
