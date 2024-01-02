import { useFetch } from 'usehooks-ts';

import Booth from '../types/Booth';

const url = 'http://13.124.57.234:5000/ranking';

type Booths = {
    booths: Booth[];
}

export default function useFetchBooths() {
  const { data } = useFetch<Booths>(url);
  if (!data) {
    return [];
  }
  return data.booths;
}
