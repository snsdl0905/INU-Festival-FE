import { useEffect, useState } from 'react';

import { styled } from 'styled-components';
import Kakao from '../../utils/CreateKakaoMap';
import Booth from '../../types/Booth';
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
  setFilteredBooths: (value: Booth[]) => void;
};

export default function MapLayer({
  filteredBooths,
  setFilteredBooths,
  selectedDay,
} : MapLayerProps) {
  const { kakao } = window;

  const [kakaoMap, setKakaoMap] = useState(null);
  const [markers, setMarkers] = useState<any[]>([]);

  useEffect(() => {
    const map = Kakao;
    setKakaoMap(map);
  }, []);

  const createMarkers = (booth : Booth) => {
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
          clickable: true,
        });
        marker.setMap(null);
        marker.setMap(kakaoMap);
        setMarkers((prevMarkers) => [...prevMarkers, marker]);

        kakao.maps.event.addListener(marker, 'click', () => {
          const newMarker: Booth[] = [];
          newMarker.push(booth);
          setFilteredBooths(newMarker);
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
  }, [selectedDay, filteredBooths, kakaoMap]);

  // useEffect(() => {
  //   console.log(showBooth);
  //   const boothBanner = document.getElementById('booth-banner');
  //   if (boothBanner) {
  //     boothBanner.style.zIndex = showBooth ? '101' : '-1';
  //   }
  // }, [showBooth]);

  return (
    <Container id="map" />
  );
}
