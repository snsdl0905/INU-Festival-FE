import { useEffect } from 'react';

import useFetchLineup from './useFetchLineup';

type useSetLineUpListProps = {
  setLineUpList: (value: string[]) => void;
  }

export default function useSetLineUpList({ setLineUpList }: useSetLineUpListProps) {
  const lineupList = useFetchLineup();

  useEffect(() => {
    const imgList = lineupList.map((lineup) => lineup.img);
    setLineUpList(imgList);
  }, [lineupList]);
}
