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
  selectedBooth: Booth[] | null;
  setSelectedBooth: (value: Booth[] | null) => void;
};

export default function MapLayer({
  filteredBooths,
  selectedDay,
  selectedBooth,
  setSelectedBooth,
} : MapLayerProps) {
  const { kakao } = window;

  const [kakaoMap, setKakaoMap] = useState(null);
  const [markers, setMarkers] = useState<any[]>([]);

  useEffect(() => {
    const map = Kakao;
    setKakaoMap(map);
  }, []);

  const resetMarkers = () => {
    setMarkers((prevMarkers) => {
      prevMarkers.forEach((marker) => marker.setMap(null));
      return [];
    });

    setMarkers(() => []);
  };

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
          setSelectedBooth(newMarker);
          setMarkers((prevMarkers) => [...prevMarkers, marker]);
        });
      }
    });
  };

  useEffect(() => {
    if (!kakaoMap) return;

    kakao.maps.event.addListener(kakaoMap, 'click', () => {
      setSelectedBooth(null);
    });

    resetMarkers();

    const booths: Booth[] = selectedBooth || filteredBooths;

    booths.forEach((booth) => {
      createMarkers(booth);
    });
  }, [selectedDay, filteredBooths, kakaoMap]);

  useEffect(() => {
    setSelectedBooth(null);
  }, [Object.keys(filteredBooths).join()]);

  return (
    <Container id="map" />
  );
}
