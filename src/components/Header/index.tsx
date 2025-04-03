'use client';
import React from 'react';

import { Container } from '@/components';
import { HeaderStyle } from '@/components/Header/index.style';
import { Menu } from '@/components/Header/Menu';
import { ScrollListener } from '@/utils';

export const Header = () => {
  // const { navHide } = useScrollListener();
  const navHide = ScrollListener();

  return (
    <HeaderStyle className={`hideMobile ${navHide ? 'isScroll' : ''}`}>
      <Container id="main-header" className="mobile-con">
        <div className="flex content">
          <div className="menu hideMobile">
            <Menu />
          </div>
        </div>
      </Container>
    </HeaderStyle>
  );
};
