declare global {
  interface Window {
    kakao: any
  }
}
export default function Kakao({ showBooth, setShowBooth }) {
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
  const kakaoMap = new kakao.maps.Map(node, {
    projectionId: null,
    mapTypeId: kakao.maps.MapTypeId.PLAN,
    $scale: false,
    // 지도의 중심 좌표 (x, y)
    center: new kakao.maps.Coords(750, -400),
    level: 0,
  });

  const positions = [
    {
      title: '주점1',
      category: '주점',
      latlng: new kakao.maps.LatLng(33.47233134592973, 124.85169847403314),
    },
    {
      title: '주점2',
      category: '주점',
      latlng: new kakao.maps.LatLng(33.47237615840697, 124.85178771184336),
    },
    {
      title: '주점3',
      category: '주점',
      latlng: new kakao.maps.LatLng(33.47243951217299, 124.85190660677495),
    },
    {
      title: '주점4',
      category: '주점',
      latlng: new kakao.maps.LatLng(33.47248079516959, 124.85200023403294),
    },
    {
      title: '컴퓨터공학',
      category: '비주점',
      latlng: new kakao.maps.LatLng(33.472988471074906, 124.85216839193092),
    },
    {
      title: '정보통신',
      category: '비주점',
      latlng: new kakao.maps.LatLng(33.472943733394025, 124.85208345358744),
    },
    {
      title: '임베디드',
      category: '비주점',
      latlng: new kakao.maps.LatLng(33.47289454625307, 124.8521578038457),
    },
    {
      title: '정보대',
      category: '비주점',
      latlng: new kakao.maps.LatLng(33.47289869744282, 124.85198131418802),
    },
    {
      title: '알콜존;',
      category: '비주점',
      latlng: new kakao.maps.LatLng(33.473715135124635, 124.85061888448256),
    },
    {
      title: '무대;',
      category: '비주점',
      latlng: new kakao.maps.LatLng(33.47297800238091, 124.8505252367218),
    },
    {
      title: '동아리1',
      category: '비주점',
      latlng: new kakao.maps.LatLng(33.472901453814174, 124.85089280822974),
    },
    {
      title: '동아리2',
      category: '비주점',
      latlng: new kakao.maps.LatLng(33.47252063607873, 124.85221865811097),
    },
    {
      title: '타코야끼',
      category: '푸드트럭',
      latlng: new kakao.maps.LatLng(33.47313207919032, 124.85234123498789),
    },
  ];

  positions.forEach((markerPosition) => {
    const imageSize = new kakao.maps.Size(29, 35);
    const imageOption = { offset: new kakao.maps.Point(16, 34) };
    let imageSrc;
    switch (markerPosition.category) {
    case '주점':
      imageSrc = 'markerBlack.png';
      break;
    case '비주점':
      imageSrc = 'markerYellow.png';
      break;
    case '푸드트럭':
      imageSrc = 'markerBlue.png';
      break;
    default:
      break;
    }

    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

    const marker = new kakao.maps.Marker({
      map: kakaoMap,
      position: markerPosition.latlng,
      title: markerPosition.title,
      image: markerImage,
    });
    marker.setMap(kakaoMap);

    kakaoMap.getCenter(markerPosition.latlng);
  });

  // 지도 중심좌표에 마커를 생성합니다
  const marker1 = new kakao.maps.Marker({
    position: kakaoMap.getCenter(),
  });
  marker1.setMap(kakaoMap);

  kakao.maps.event.addListener(kakaoMap, 'click', (mouseEvent) => {
    const latlng = mouseEvent.latLng;
    marker1.setPosition(latlng);

    let message = `클릭한 위치의 위도는 ${latlng.getLat()} 이고, `;
    message += `경도는 ${latlng.getLng()} 입니다`;

    console.log(message);
  });

  // kakao.maps.event.addListener(marker, 'click', () => {
  //   setShowBooth(true);
  // });

  // // 커스텀 오버레이에 표시할 내용입니다
  // // HTML 문자열 또는 Dom Element 입니다
  // const content = '<div class ="label"><span class="left"></span><button class="center">안녕</button><span class="right"></span></div>';

  // // 커스텀 오버레이가 표시될 위치입니다
  // const position = new kakao.maps.Coords(700, -700);

  // // 커스텀 오버레이를 생성합니다
  // const customOverlay = new kakao.maps.CustomOverlay({
  //   position,
  //   content,
  // });

  // // console.log(customOverlay);

  // // 커스텀 오버레이를 지도에 표시합니다
  // customOverlay.setMap(map);

  // const infowindow = new kakao.maps.InfoWindow({
  //   content: '커스텀 타일셋?',
  // });
  // infowindow.open(map, marker);
}
