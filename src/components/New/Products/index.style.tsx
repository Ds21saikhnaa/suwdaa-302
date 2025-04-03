// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';

export const NewProductProviderStyle = styled.div`
  margin: 10px 0 30px 0;
  gap: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
`;

export const NewProductStyle = styled.div`
  display: flex;
  flex-direction: column;
  .title {
    font-size: 24px;
  }
`;
