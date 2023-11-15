import { useFetch } from 'usehooks-ts';

import Shouts from '../types/Shouts';

const url = 'http://13.124.57.234:5000/shout';

type Sentences = {
  shouts : Shouts[];
}

export default function useFetchSentence() {
  const { data } = useFetch<Sentences>(url);

  if (!data) return [];
  return data.shouts;
}
