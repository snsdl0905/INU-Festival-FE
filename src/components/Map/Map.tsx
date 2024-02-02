import styled from 'styled-components';

import MapLayer from './MapLayer';
import BottomSheet from './BannerContent';

import useFetchBooths from '../../hooks/useFetchBooths';

const Container = styled.div`
    max-width: 600px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    cursor: grab;
`;

export default function Map() {
  const booths = useFetchBooths();
  console.log(booths);
  return (
    <Container>
      <MapLayer />
      <BottomSheet />
    </Container>
  );
}
