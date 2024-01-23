import Article from '../components/Article';
import Footer from '../components/Main/Footer';
import LineUp from '../components/Main/LineUp';
import FestivalSentence from '../components/Main/FestivalSentence';
import BoothRanking from '../components/Main/BoothRanking';

export default function MainPage() {
  return (
    <>
      <LineUp />
      <Article>
        <FestivalSentence />
        <BoothRanking />
      </Article>
      <Footer />
    </>
  );
}
