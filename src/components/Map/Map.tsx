import styled from 'styled-components';

import MapContent from './MapContent';
import ListButton from './ListButton';
import BannerContent from './BannerContent';

const Container = styled.div`
    max-width: 600px;
    width: 100%;
    height: 50em;
    overflow: hidden;
    cursor: grab;
`;

export default function Map() {
  return (
    <Container>
      <MapContent />
      <ListButton />
      <BannerContent />

    </Container>
  );
}
