import { useEffect } from 'react';

import useFetchLineup from './useFetchLineup';

type useSetLineUpListProps = {
    setDemoImgList: (value: string[]) => void;
  }

export default function useSetLineUpList({ setDemoImgList }: useSetLineUpListProps) {
  const lineupList = useFetchLineup();

  useEffect(() => {
    const imgList = lineupList.map((lineup) => lineup.img);
    setDemoImgList(imgList);
  }, [lineupList]);
}
