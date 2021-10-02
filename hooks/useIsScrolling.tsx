import { useEffect, useLayoutEffect, useState } from 'react';

// Note: Currently not working properly
const useIsScrolling = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  function handleScroll() {
    setIsScrolling(true);

    if (timer) {
      clearTimeout(timer);
    }

    setTimer(
      setTimeout(() => {
        setIsScrolling(false);
      }, 150)
    );
  }

  useEffect(() => {
    console.log(isScrolling);
  }, [isScrolling]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isScrolling;
};

export default useIsScrolling;
