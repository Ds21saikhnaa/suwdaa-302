'use client';
// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';

const ContainerWrapperProp = styled.div`
  max-width: 1440px;
  width: 1440px;
  @media (max-width: 1440px) {
    max-width: 1200px;
    width: 1200px;
  }
  @media (max-width: 1200px) {
    max-width: 95%;
    width: 95%;
  }
  @media (max-width: 992px) {
    max-width: 100%;
    width: 100%;
    padding: 20px 60px;
  }
  @media (max-width: 592px) {
    padding: 10px 20px;
  }
`;

export default ContainerWrapperProp;
