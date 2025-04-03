// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';

import { themeConfig } from '@/config';

const FooterStyle = styled.div`
  height: 240px;
  display: flex;
  justify-content: center;
  background-color: ${themeConfig.color.base};
`;

export default FooterStyle;
