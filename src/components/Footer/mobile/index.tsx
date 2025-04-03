'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SideBarData } from '@/config';

import FooterMobileStyle from './index.style';

export const MobileFooter = () => {
  const pathname = usePathname(); // Renamed for clarity
  const [activeIndex, setActiveIndex] = useState<string>(pathname);
  useEffect(() => {
    setActiveIndex(pathname);
  }, [pathname]);

  return (
    <FooterMobileStyle className="hideDesktop">
      {SideBarData.map((el, ind) => (
        <Link
          onClick={() => setActiveIndex(el.src)}
          key={ind}
          className={`footerClick ${activeIndex === el.src ? 'active' : ''}`}
          href={el.src}
        >
          {el.name}
        </Link>
      ))}
    </FooterMobileStyle>
  );
};
