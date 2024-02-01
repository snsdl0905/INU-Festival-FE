import styled from 'styled-components';

import MapLayer from './MapLayer';
import ListButton from './ListButton';
import BottomSheet from './BottomSheet';

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
      <MapLayer />
      <BottomSheet />
    </Container>
  );
}

// MapContent - BaseLayer
// BottomSheet

// BottemSheetHeader
// BottomSheetContent
