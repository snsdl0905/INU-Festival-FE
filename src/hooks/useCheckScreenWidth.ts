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
    console.log("Hello")
    if(window.innerWidth < 376)  { setPerView(2); setSpaceBetween(100); }
    else if(window.innerWidth < 580)  { setPerView(2); setSpaceBetween(50);}
    else if (window.innerWidth < 850) { setPerView(3); setSpaceBetween(100); }
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

