import { styled } from 'styled-components';

import LineUp from '../components/LineUp';
import FestivalSentence from '../components/FestivalSentence';
import BoothRanking from '../components/BoothRanking';
import Footer from '../components/Footer';

export default function MainPage() {
  return (
    <>
      <LineUp />
      <FestivalSentence />
      <BoothRanking />
      <Footer />
    </>
  );
}
