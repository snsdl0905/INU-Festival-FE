import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Article from '../components/Article';
import LoginForm from '../components/Login/LoginForm';

import useLoginFormStore from '../hooks/useLoginFormStore';

export default function LoginPage() {
  const navigate = useNavigate();

  const [{ accessToken }, store] = useLoginFormStore();

  useEffect(() => {
    store.reset();
  }, []);

  useEffect(() => {
    if (accessToken) {
      store.reset();
      navigate('/');
    }
  }, [accessToken]);

  return (
    <Article>
      <p>로그인</p>
      <LoginForm />
    </Article>
  );
}
