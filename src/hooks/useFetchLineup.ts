import { useFetch } from 'usehooks-ts';

import LineUp from '../types/LineUp';

const url = 'http://13.124.57.234:5000/lineUp';

type LineUpList = {
  lineups: LineUp[];
}

export default function useFetchLineUp() {
  const { data } = useFetch<LineUpList>(url);

  if (!data) {
    return [];
  }

  return data.lineups;
}
