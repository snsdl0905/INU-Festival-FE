import { useEffect, useState } from 'react';

import { styled } from 'styled-components';
import Kakao from '../../utils/CreateKakaoMap';
import Booth from '../../types/Booth';
import BoothList from './BoothList';
import BoothDay from '../../types/BoothDay';

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

type MapLayerProps = {
  filteredBooths: Booth[];
  selectedDay: string;
};

export default function MapLayer({ filteredBooths, selectedDay } : MapLayerProps) {
  const { kakao } = window;

  const [kakaoMap, setKakaoMap] = useState(null);
  const [markers, setMarkers] = useState<any[]>([]);
  const [selectedBooth, setSelectedBooth] = useState<Booth | null>(null);

  useEffect(() => {
    const map = Kakao;
    setKakaoMap(map);
  }, []);

  const handleBoothClick = (clickedBooth : Booth[], date: string) => (
    <BoothList
      booths={clickedBooth}
      selectedDay={date}
    />
  );

  const createMarkers = (booth : Booth) => {
    booth.boothDays.forEach((boothDay: BoothDay) => {
      if (boothDay.day === selectedDay) {
        console.log(booth);
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
        marker.setMap(null);
        marker.setMap(kakaoMap);
        setMarkers((prevMarkers) => [...prevMarkers, marker]);

        kakao.maps.event.addListener(marker, 'click', () => {
          setSelectedBooth(booth);
        });
      }
    });
    // console.log(markers);
  };

  useEffect(() => {
    if (!kakaoMap) return;

    setMarkers((prevMarkers) => {
      prevMarkers.forEach((marker) => marker.setMap(null));
      return [];
    });

    setMarkers(() => []);

    filteredBooths.forEach((booth) => {
      createMarkers(booth);
    });

    // Kakao({ showBooth, setShowBooth });
  }, [selectedDay, kakaoMap, markers]);

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
