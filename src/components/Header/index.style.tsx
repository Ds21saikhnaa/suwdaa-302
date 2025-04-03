// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';

import { themeConfig } from '@/config';

export const HeaderStyle = styled.div`
  height: 70px;
  //background-color: ${themeConfig.color.base};
  display: flex;
  position: fixed;
  top: 0;
  z-index: 999;
  justify-content: center;
  will-change: transform;
  transition: all 0.5s ease-in-out 0s;
  @media (max-width: 992px) {
    height: 60px;
    width: 100%;
    padding: 0 !important;
    //background-color: white;
  }
  &.isScroll {
    top: 0;
    @media (max-width: 992px) {
      top: -250px;
    }
  }
  .mobile-con {
    padding: 0 !important;
  }
  .flex {
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    @media (max-width: 992px) {
      height: 60px;
      background: #fff;
      width: 100%;
      left: 0;
      z-index: 26;
      overflow-x: auto;
      overflow-y: hidden;
      justify-content: center;
      align-items: center;
    }
    .logo {
      width: 314px;
      height: 25px;
      background-image: url(${themeConfig.icons.desktop.header.logo});
      @media (max-width: 992px) {
        height: 40px;
        width: 187px;
        backgrount-position: center;
        background-image: url(${themeConfig.icons.mobile.header.logo});
      }
    }
    .menu {
      display: flex;
      flex-direction: row;
    }
  }
`;
