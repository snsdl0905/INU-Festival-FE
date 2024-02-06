import { useFetch } from 'usehooks-ts';

import Booth from '../types/Booth';

export default function useFetchBooth(id : string) {
  const url = `${process.env.REACT_APP_URL}/booths/${id}`;
  const { data } = useFetch<Booth>(url);
  if (!data) {
    return [];
  }
  return data;
}
