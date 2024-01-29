import { useEffect } from 'react';
import { styled } from 'styled-components';

function Kakao() {
  const { kakao } = window;

  const plan = (x: number, y: number, z: number) => {
    y = -y - 1;
    const limit = Math.ceil(3 / 2 ** z);
    const path = 'split_map/';

    if (y >= 0 && y < limit && x >= 0 && x < limit) {
      return `${path}planh${
        z}_${y}_${x}.png`;
    }
    return 'https://i1.daumcdn.net/dmaps/apis/white.png';
  };

  kakao.maps.Tileset.add(
    'PLAN',
    new kakao.maps.Tileset(512, 512, plan, '', false, 0, 2),
  );

  const node = document.getElementById('map');
  const map = new kakao.maps.Map(node, {
    projectionId: null,
    mapTypeId: kakao.maps.MapTypeId.PLAN,
    $scale: false,
    // 지도 위치 (x, y)
    center: new kakao.maps.Coords(750, -700),
    level: 0,
  });
  const center = map.getCenter();
  const marker = new kakao.maps.Marker({
    position: center,
  });
  marker.setMap(map);

  const infowindow = new kakao.maps.InfoWindow({
    content: '커스텀 타일셋',
  });
  infowindow.open(map, marker);
}

const Container = styled.div`
    border: solid 1px black;
    max-width: 600px;
    width: 100%;
    height: 52em;
    overflow: hidden;
    cursor: grab;

    #map {
        height: 100%;
    }

    img {
        background-repeat: no-repeat;
    }
`;

export default function Map() {
  useEffect(() => {
    Kakao();
  }, []);

  return (
    <Container>
      <div id="map" />
    </Container>
  );
}
