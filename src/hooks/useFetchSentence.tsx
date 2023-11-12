import { useFetch } from 'usehooks-ts';

import Shouts from '../types/Shouts';

const url = 'http://43.201.95.140:5000/shouts';

type Sentences = {
    sentences : Shouts[];
}

export default function useFetchSentence() {
  const { data } = useFetch<Sentences>(url);

  if (!data) return [];
  return data.sentences;
}
