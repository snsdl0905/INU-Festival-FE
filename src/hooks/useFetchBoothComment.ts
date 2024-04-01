import { useFetch } from 'usehooks-ts';

import BoothComment from '../types/BoothComment';

type BoothCommentType = {
    boothComment: BoothComment;
    };

export default function useFetchBoothComment(id: string) {
  const url = `${process.env.REACT_APP_URL}/booth/${id}/comment`;

  const { data } = useFetch<BoothCommentType>(url);

  if (!data) {
    return [];
  }

  return data;
}
