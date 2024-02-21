import styled from 'styled-components';

import { useState, useEffect } from 'react';
import MapLayer from './MapLayer';
import BottomSheet from './BannerContent';
import Booth from '../../types/Booth';
import useFetchBooths from '../../hooks/useFetchBooths';
import BoothBanner from './BoothBanner';

const Container = styled.div`
    max-width: 600px;
    width: 100%;
    cursor: grab;
`;

export default function Map() {
  const booths = useFetchBooths();
  const [selectedDay, setSelectedDay] = useState<string>('월');
  const [selectedCategory, setSelectedCategory] = useState<string>('주점');
  const [filteredBooths, setFilteredBooths] = useState<Booth[]>([]);

  useEffect(() => {
    const filtered = booths.filter((booth) => {
      const dayCount = booth.boothDays.filter((boothDay) => boothDay.day === selectedDay);
      return dayCount.length && booth.category === selectedCategory;
    });
    setFilteredBooths(filtered);
  }, [booths, selectedDay, selectedCategory]);

  return (
    <Container>
      <MapLayer
        filteredBooths={filteredBooths}
        setFilteredBooths={setFilteredBooths}
        selectedDay={selectedDay}
      />
      <BottomSheet
        setSelectedDay={setSelectedDay}
        selectedDay={selectedDay}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
        booths={filteredBooths}
      />
      <BoothBanner />
    </Container>
  );
}
