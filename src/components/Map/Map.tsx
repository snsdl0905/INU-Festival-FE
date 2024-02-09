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

  console.log(booths);
  // const filteredBooths = booths.filter((booth) =>
  //   booth.boothDays
  // );  console.log(selectedCategories);

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
