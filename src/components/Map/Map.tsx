import styled from 'styled-components';

import { useState } from 'react';
import MapLayer from './MapLayer';
import BottomSheet from './BannerContent';
import Booth from '../../types/Booth';
import useFetchBooths from '../../hooks/useFetchBooths';

const Container = styled.div`
    max-width: 600px;
    width: 100%;
    cursor: grab;
`;

export default function Map() {
  const booths = useFetchBooths();
  const [selectedDay, setSelectedDay] = useState<string>('수');
  const [selectedCategory, setSelectedCategory] = useState<string>('주점');
  const [selectedBooth, setSelectedBooth] = useState<Booth[] | null>(null);

  const filtered = booths.filter((booth) => {
    const dayCount = booth.boothDays.filter((boothDay) => boothDay.day === selectedDay);
    return dayCount.length && booth.category === selectedCategory;
  });

  return (
    <Container>
      <MapLayer
        filteredBooths={filtered}
        selectedDay={selectedDay}
        selectedBooth={selectedBooth}
        setSelectedBooth={setSelectedBooth}
      />
      <BottomSheet
        setSelectedDay={setSelectedDay}
        selectedDay={selectedDay}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
        booths={selectedBooth || filtered}
      />
    </Container>
  );
}
