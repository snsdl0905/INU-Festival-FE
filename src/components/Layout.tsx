import { Outlet } from 'react-router-dom';

import { styled } from 'styled-components';

import Navbar from './Main/Navbar';

const Container = styled.div`
  margin: auto;
  max-width: 600px;
  height: 100%;
  background: ${(props) => props.theme.colors.layoutBackground};

  main {
    display: flex;
    flex-direction: column;
    position: relative;
    padding-inline: 1.6rem;
  }
`;

export default function Layout() {
  return (
    <Container>
      <main>
        <Outlet />
      </main>
      <Navbar />
    </Container>
  );
}
