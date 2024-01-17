import { useEffect, useState } from 'react';

export default function useCheckScreenWidth(setPerView: (value: number) => void) {
  const [, setWindowSize] = useState({
    width: window.innerWidth,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
    });
    if (window.innerWidth <= 420) {
      setPerView(1.7);
    } else if (window.innerWidth <= 600) {
      setPerView(2);
    } else {
      setPerView(3);
    }
  };

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
}
