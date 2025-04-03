// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';

// import { themeConfig } from '@/config';

const FooterMobileStyle = styled.div`
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 4px;
  background-color: #fff;
  z-index: 100;
  padding: 0 4px;
  .footerClick {
    height: 54px;
    flex: 1 1 0;
    color: #ff69b4;
    font-size: 11px;
    line-height: 18px;
    font-weight: bold;
    text-transform: uppercase;
    overflow: hidden;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    word-spacing: 999px;
    border-bottom: 3px solid transparent;
    margin-bottom: -4px;
  }
  .active {
    border-bottom-color: #ff69b4;
  }
`;

export default FooterMobileStyle;
