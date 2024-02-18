import { useEffect } from 'react';

import Article from '../components/Article';
import Footer from '../components/Main/Footer';
import Lineups from '../components/Main/Lineups';
import FestivalSentence from '../components/Main/FestivalSentence';
import BoothRanking from '../components/Main/BoothRanking';
import useLoadingStore from '../hooks/useLoadingStore';

export default function MainPage() {
  const [, store] = useLoadingStore();

  useEffect(() => {
    store.changeLoading(true);

    setTimeout(() => {
      store.changeLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <p>{String(store.loading)}</p>
      <Lineups />
      <Article>
        <FestivalSentence />
        <BoothRanking />
        <Footer />
      </Article>
    </>
  );
}
