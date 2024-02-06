import styled from 'styled-components';

import MapLayer from './MapLayer';
import BottomSheet from './BannerContent';
import BoothBanner from './BoothBanner';

const Container = styled.div`
    max-width: 600px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    cursor: grab;
`;

export default function Map() {
  return (
    <Container>
      <MapLayer />
      <BoothBanner />
      <BottomSheet />
    </Container>
  );
}
