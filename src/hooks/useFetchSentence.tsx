import { useFetch } from 'usehooks-ts';

import Shouts from '../types/Shouts';

const url = `${process.env.REACT_APP_URL}/shout/all_messages`;

type Sentences = {
  shouts : Shouts[];
}

export default function useFetchSentence() {
  return useFetch<Sentences>(url);

  // if (!data) return [];
  // return data;
  // return data.shouts;
}
