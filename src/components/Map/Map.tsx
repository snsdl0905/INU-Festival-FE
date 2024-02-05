import styled from 'styled-components';

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
  const categories = ['월', '화', '수', '주점', '비주점', '푸드트럭'];
  console.log(booths);

  return (
    <Container>
      <MapLayer />
      <BottomSheet />
    </Container>
  );
}
