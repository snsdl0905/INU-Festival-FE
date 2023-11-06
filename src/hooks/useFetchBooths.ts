import { useFetch } from 'usehooks-ts';

import Booth from '../types/Booth';

const url = 'http://43.201.95.140:5000/ranking';

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
