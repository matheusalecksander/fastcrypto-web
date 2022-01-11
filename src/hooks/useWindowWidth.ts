import {useEffect, useState} from 'react';

export function useWindowWidth() {
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    function handleResize() {
      if (typeof window !== 'undefined') {
      setWindowSize(
        window.innerWidth,
      );
    }}

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
