// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';

import { themeConfig } from '@/config';

interface prop {
  name?: string;
  bottom?: string;
}
export const CustomContact = (prop: prop) => {
  const { name, bottom } = prop;
  return (
    <CustomContactStyle>
      <div className="info">
        <div className="title">{name}</div>
        {bottom && (
          <div className="row-bot">
            <p className="flag-dynamic">{bottom.slice(0, 4)}-</p>
            <p className="flag-mask">XXXX</p>
          </div>
        )}
      </div>
    </CustomContactStyle>
  );
};

const CustomContactStyle = styled.div`
  width: 300px;
  height: 60px;
  margin-top: 10px;
  background-color: ${themeConfig.color.base};
  border-radius: 5px;
  .info {
    padding: 0 30px;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    .row-bot {
      display: flex;
      flex-direction: row;
    }
    .title {
      color: white;
      font-weight: 600;
      margin: 0 !important;
      font-size: 20px;
    }
    .flag-dynamic {
      margin: 0 !important;
      font-size: 13px;
      line-height: 1;
      color: #fff;
    }
    .flag-mask {
      margin: 0 !important;
      font-size: 13px;
      line-height: 1;
      color: #f8c500;
    }
  }
`;
