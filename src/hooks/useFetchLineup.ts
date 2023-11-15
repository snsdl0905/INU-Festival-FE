import { useFetch } from 'usehooks-ts';

import LineUp from '../types/Lineup';

const url = 'http://13.124.57.234:5000/lineup';

type LineupList = {
    lineups: LineUp[];
}

export default function useFetchLineup() {
  const { data } = useFetch<LineupList>(url);
  if (!data) {
    return [];
  }
  return data.lineups;
}
