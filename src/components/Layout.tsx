import { Outlet } from 'react-router-dom';

import { styled } from 'styled-components';

import Navbar from './Main/Navbar';
import useCheckAccessToken from '../hooks/useCheckAccessToken';

const Container = styled.div`
  margin: auto;
  max-width: 600px;
  height: 100%;
  background: ${(props) => props.theme.colors.layoutBackground};
  
  main {
    position: relative;
    display: flex;
    flex-direction: column;
  }
`;

export default function Layout() {
  useCheckAccessToken();

  return (
    <Container>
      <main>
        <Outlet />
      </main>
      <Navbar />
    </Container>
  );
}
