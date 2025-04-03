import { useEffect, useState } from 'react';

export const ScrollListener = (): boolean => {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const [prevScrollY, setPrevScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window?.scrollY || 0;
      if (currentScrollY > prevScrollY && currentScrollY > 60) setIsScroll(true);
      else setIsScroll(false);
      setPrevScrollY(currentScrollY);
    };
    window?.addEventListener('scroll', handleScroll);
    return () => {
      window?.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  // useEffect(() => () => setIsScroll(false), []);

  return isScroll;
};
