import { useEffect, useState } from 'react';

import { styled } from 'styled-components';

import Kakao from '../../utils/CreateKakaoMap';

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

export default function MapLayer() {
  const [showBooth, setShowBooth] = useState(false);

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

  useEffect(() => {
    Kakao({ showBooth, setShowBooth });
  }, []);

  useEffect(() => {
    console.log(showBooth);
    const boothBanner = document.getElementById('booth-banner');
    if (boothBanner) {
      boothBanner.style.zIndex = showBooth ? '101' : '-1';
    }
  }, [showBooth]);

  return (
    <Container id="map" />

  );
}
