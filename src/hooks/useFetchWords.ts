import { useFetch } from 'usehooks-ts';

import Keyword from '../types/Keyword';

const url = 'http://13.124.57.234:5000/keyword';

type Keywords = {
  keywords: Keyword[];
}

export default function useFetchKeyword() {
  const { data } = useFetch<Keywords>(url);
  if (!data) return [];
  return data.keywords;
}

useFetchKeyword