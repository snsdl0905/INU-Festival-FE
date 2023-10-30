import { useEffect, useState } from "react";

type useCheckScreenWidthProps = {
  setPerView: (value: number) => void;
  setSpaceBetween: (value: number) => void;
}

export default function useCheckScreenWidth({setPerView, setSpaceBetween}: useCheckScreenWidthProps) {
  const [_, setWindowSize] = useState({
    width: window.innerWidth,
  });

  const handleResize = () => {

    setWindowSize({
      width: window.innerWidth,
    });
    console.log(window.innerWidth);
    if(window.innerWidth < 300)  { setPerView(1); setSpaceBetween(50); }
    else if(window.innerWidth < 400)  { setPerView(2); setSpaceBetween(150); }
    else if(window.innerWidth < 500)  { setPerView(2); setSpaceBetween(100); }
    else if(window.innerWidth < 750)  { setPerView(2); setSpaceBetween(50);}
    else if (window.innerWidth < 1100) { setPerView(3); setSpaceBetween(50); }
    else if (window.innerWidth < 1200) { setPerView(4); setSpaceBetween(50);}
    else { setPerView(5); setSpaceBetween(50); }
  }

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);
}

