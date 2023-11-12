import { useFetch } from 'usehooks-ts';

import LineUp from '../types/Lineup';

const url = 'http://43.201.95.140:5000/lineup';

type LineupList = {
    lists: LineUp[];
}

export default function useFetchLineup() {
  const { data } = useFetch<LineupList>(url);
  if (!data) {
    return [];
  }
  return data.lists;
}
