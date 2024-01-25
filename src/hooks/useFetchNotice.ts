import { useFetch } from 'usehooks-ts';

import Notice from '../types/Notice';

const url = 'http://13.124.57.234:5000/notices';

type Notices = {
    notices: Notice[];
}

export default function useFetchNotices() {
  const { data } = useFetch<Notices>(url);
  if (!data) {
    return [];
  }
  return data.notices;
}
