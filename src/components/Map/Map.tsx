import styled from 'styled-components';

import { useState } from 'react';
import MapLayer from './MapLayer';
import BottomSheet from './BannerContent';

import useFetchBooths from '../../hooks/useFetchBooths';

const Container = styled.div`
    max-width: 600px;
    width: 100%;
    cursor: grab;
`;

export default function Map() {
  const booths = useFetchBooths();

  const [selectedCategories, setSelectedCategories] = useState<string[]>(['월']);

  // console.log(booths);
  // console.log(selectedCategories);

  const filteredBooths = booths.filter(
    (booth) => {
      const isIncludedDays = booth.boothDays.filter(
        ((dayInfo) => selectedCategories.includes(dayInfo.day)),
      );

      return isIncludedDays.length
    || selectedCategories.includes(booth.category);
    },
  );

  // console.log(filteredBooths);

  return (
    <Container>
      <MapLayer />
      <BottomSheet
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
    </Container>
  );
}
