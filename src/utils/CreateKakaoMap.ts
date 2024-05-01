export default function Kakao() {
  const { kakao } = window;

  const plan = (x: number, y: number, z: number) => {
    y = -y - 1;
    const limit = Math.ceil(3 / 2 ** z);
    const path = 'split_map/';

    if (y >= 0 && y < limit && x >= 0 && x < limit) {
      return `${path}${
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
    // 지도의 중심 좌표 (x, y)
    center: new kakao.maps.Coords(450, -400),
    level: 0,
  });
  const center = map.getCenter();
  // const marker = new kakao.maps.Marker({
  //   position: center,
  // });
  // marker.setMap(map);

  const mark = new kakao.maps.Marker({
    // 지도 중심좌표에 마커를 생성합니다
    position: new kakao.maps.LatLng('33.473423523488634', '124.85189092016596'),
  });

  mark.setMap(map);

  kakao.maps.event.addListener(map, 'click', (mouseEvent) => {
    // 클릭한 위도, 경도 정보를 가져옵니다
    const latlng = mouseEvent.latLng;

    // 마커 위치를 클릭한 위치로 옮깁니다
    mark.setPosition(latlng);

    let message = `(${latlng.getLat()}, `;
    message += `${latlng.getLng()})`;

    console.log(message);
  });
  return map;
}
