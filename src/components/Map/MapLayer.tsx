import { useEffect, useState } from 'react';

import { styled } from 'styled-components';
import Kakao from '../../utils/CreateKakaoMap';
import Booth from '../../types/Booth';
import BoothList from './BoothList';

const Container = styled.div`
    max-width: 600px;
    z-index: 200;
    width: 100%;
    /* position: absolute; */
    position: fixed;
    /* max-height: ; */
    height: 34%;
    top: 0;
`;

// type MapLayerProps = {
//   filteredBooths: Booth[];
//   selectedDay: string;
// };

type MapLayerProps = {
  selectedDay: string;
};

type BoothDay = {
  id: string;
  day: string;
  x: string;
  y: string;
};

type TempBooth = {
  id: string;
  name: string;
  category: string;
  department: string;
  location: string;
  description: string;
  liked: number;
  boothDays: BoothDay[];
};

// export default function MapLayer({ filteredBooths, selectedDay } : MapLayerProps) {
export default function MapLayer({ selectedDay }: MapLayerProps) {
  const { kakao } = window;
  // const [showBooth, setShowBooth] = useState(false);
  // useEffect(() => {
  //   const boothBanner = document.getElementById('booth-banner');
  //   const handleClickOther = (event) => {
  //     if (boothBanner && !boothBanner.contains(marker)) {
  //       setShowBooth(false);
  //     }
  //   };

  //   document.addEventListener('click', handleClickOther);

  //   return () => {
  //     document.removeEventListener('click', handleClickOther);
  //   };
  // }, []);

  const [kakaoMap, setKakaoMap] = useState(null);
  const [markers, setMarkers] = useState<any[]>([]);
  const [selectedBooth, setSelectedBooth] = useState<Booth | null>(null);

  useEffect(() => {
    const map = Kakao;
    setKakaoMap(map);
  }, []);

  const filteredBooths : TempBooth[] = [
    {
      id: '1',
      name: '총학부스',
      category: '비주점',
      department: '총학생회',
      location: '10호관과 11호관 사이',
      description: '총학생회 부스입니다.',
      liked: 0,
      boothDays: [
        {
          id: '1',
          day: '월',
          x: '33.47233134592973',
          y: '124.85169847403314',
        },
        {
          id: '2',
          day: '화',
          x: '33.47237615840697',
          y: '124.85178771184336',
        },
      ],
    },
    {
      id: '2',
      name: '다크2호스',
      category: '비주점',
      department: '탁구부',
      location: '10호관과 11호관 사이',
      description: '탁구 부스입니다.',
      liked: 555,
      boothDays: [
        {
          id: '1',
          day: '월',
          x: '33.472943733394025',
          y: '124.85208345358744',
        },
        {
          id: '2',
          day: '화',
          x: '33.472943733394025',
          y: '124.85208345358744',
        },
      ],
    },
    {
      id: '3',
      name: '다크3호스',
      category: '비주점',
      department: '탁구부',
      location: '10호관과 11호관 사이',
      description: '탁구 부스입니다.',
      liked: 354,
      boothDays: [
        {
          id: '1',
          day: '월',
          x: '33.473715135124635',
          y: '124.85061888448256',
        },
      ],
    },
    {
      id: '4',
      name: '다크4호스',
      category: '비주점',
      department: '탁구부',
      location: '10호관과 11호관 사이',
      description: '탁구 부스입니다.',
      liked: 777,
      boothDays: [
        {
          id: '3',
          day: '수',
          x: '33.47297800238091',
          y: '124.8505252367218',
        },
      ],
    },
    {
      id: '6',
      name: '다크ege호스',
      category: '비주점',
      department: '탁구부',
      location: '10호관과 12호관 사이',
      description: '탁구 부스입니다.',
      liked: 2000,
      boothDays: [
        {
          id: '2',
          day: '화',
          x: '33.47313207919032',
          y: '124.85234123498789',
        },
      ],
    },
  ];

  const handleBoothClick = (clickedBooth : Booth[], date: string) => (
    <BoothList
      booths={clickedBooth}
      selectedDay={date}
    />
  );

  const createMarkers = (booth : TempBooth) => {
    console.log(markers);
    // setMarkers((prevMarkers) => {
    //   prevMarkers.forEach((marker) => marker.setMap(null)); // 이전 마커들 지우기
    //   return []; // 빈 배열로 설정하여 마커 비우기
    // });

    booth.boothDays.forEach((boothDay: BoothDay) => {
      if (boothDay.day === selectedDay) {
        const latlang = new kakao.maps.LatLng(boothDay.x, boothDay.y);
        const imageSize = new kakao.maps.Size(29, 35);
        const imageOption = { offset: new kakao.maps.Point(16, 34) };
        let imageSrc;
        switch (booth.category) {
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
          position: latlang,
          title: booth.name,
          image: markerImage,
        });
        marker.setMap(kakaoMap);
        // newMarkers.push(marker);
        // setMarkers([...markers, marker]);

        console.log(markers);

        kakao.maps.event.addListener(marker, 'click', () => {
          setSelectedBooth(booth);
        });

        setMarkers(() => [...markers, marker]);
      }
    });
    // console.log(markers);
    // setMarkers(newMarkers);
  };

  useEffect(() => {
    if (!kakaoMap) return;
    markers.forEach((marker) => {
      marker.setMap(null);
      setMarkers(() => markers.filter((mark) => mark !== marker));
    });
    setMarkers([]);
    console.log(markers);

    filteredBooths.forEach((booth) => {
      createMarkers(booth);
    });

    // Kakao({ showBooth, setShowBooth });
  }, [selectedDay, kakaoMap]);

  // useEffect(() => {
  //   console.log(showBooth);
  //   const boothBanner = document.getElementById('booth-banner');
  //   if (boothBanner) {
  //     boothBanner.style.zIndex = showBooth ? '101' : '-1';
  //   }
  // }, [showBooth]);

  return (
    <Container id="map">
      {selectedBooth && (
        <BoothList
          booths={[selectedBooth]}
          selectedDay={selectedDay}
        />
      )}
    </Container>
  );
}
