import styled, { ThemeProvider } from 'styled-components';

import { Reset } from 'styled-reset';

import GlobalStyle from './styles/GlobalStyle';
import defaultTheme from './styles/defaultTheme';

import LineUp from './components/LineUp';
import FestivalSentence from './components/FestivalSentence';
import BoothRanking from './components/BoothRanking';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  background: ${(props) => props.theme.colors.layoutBackground};
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  width: 375px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Reset />
      <GlobalStyle />
      <Container>
        <Wrapper>
          <LineUp />
          <Main>
            <FestivalSentence />
            <BoothRanking />
            <Footer />
          </Main>
          <Navbar />
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}
