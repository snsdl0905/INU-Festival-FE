import { styled } from 'styled-components';

import LineUp from '../components/LineUp';
import FestivalSentence from '../components/FestivalSentence';
import BoothRanking from '../components/BoothRanking';
import Footer from '../components/Footer';

export default function MainPage() {
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

  return (
    <Wrapper>
      <LineUp />
      <Main>
        <FestivalSentence />
        <BoothRanking />
        <Footer />
      </Main>
    </Wrapper>
  );
}
