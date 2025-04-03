import Link from 'next/link';

import { SideBarData } from '@/config';

export const HoverMenu = () => (
  <div className="hover-menu">
    {SideBarData.map((el, ind) => (
      <Link key={ind} className="headerClick" href={el.src}>
        {el.name}
      </Link>
    ))}
  </div>
);
