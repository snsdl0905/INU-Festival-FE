import { Outlet } from 'react-router-dom';

import { styled } from 'styled-components';

import Navbar from './Main/Navbar';

const Container = styled.div`
  max-width: 600px;
  height: 100%;
  margin: auto;
  padding-bottom: 8rem;
  background: ${(props) => props.theme.colors.layoutBackground};
`;

const Wrapper = styled.div`
display: flex;
flex-direction: column;

main {
  display: flex;
  flex-direction: column;
  padding-inline: 1.6rem;
}
`;
export default function Layout() {
  return (
    <Container>
      <Wrapper>
        <main>
          <Outlet />
        </main>
      </Wrapper>
      <Navbar />
    </Container>
  );
}
