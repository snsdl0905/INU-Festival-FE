import { useEffect } from 'react';

import styled from 'styled-components';

import Kakao from '../../utils/CreateKakaoMap';
import ListButton from './ListButton';
import BannerContent from './BannerContent';

const Container = styled.div`
    max-width: 600px;
    width: 100%;
    height: 50em;
    overflow: hidden;
    cursor: grab;
`;

const MapContent = styled.div`
    max-width: 600px;
    width: 100%;
    position: absolute;
    height: 49em;
`;

export default function Map() {
  useEffect(() => {
    Kakao();
  }, []);

  return (
    <Container>
      <MapContent id="map" />
      <ListButton />
      <BannerContent />
    </Container>
  );
}
