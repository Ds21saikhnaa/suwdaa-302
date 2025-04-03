// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';

const MenuStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  .hover-menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 40px;
    .headerClick {
      text-decoration: none;
      color: white;
      text-transform: uppercase;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 22px;
    }
`;

export default MenuStyle;
