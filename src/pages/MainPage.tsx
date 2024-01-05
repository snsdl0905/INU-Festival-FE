import { styled } from 'styled-components';

import LineUp from '../components/LineUp';
import FestivalSentence from '../components/FestivalSentence';
import BoothRanking from '../components/BoothRanking';
import Footer from '../components/Footer';

export default function MainPage() {
  const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  main {
    display: flex;
    flex-direction: column;
    padding-inline: 1.6rem;
  }
  `;

  return (
    <Wrapper>
      <main>
        <LineUp />
        <FestivalSentence />
        <BoothRanking />
        <Footer />
      </main>
    </Wrapper>
  );
}
