'use client';
// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';

// import { themeConfig } from '@/config';

export interface ContainerProps {
  children: React.ReactNode;
}

export interface ContProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: any;
}

export const ContainerWrapper = ({ children }: ContainerProps) => <ContainerStyle>{children}</ContainerStyle>;
export const Container = ({ children, className, id }: ContProps) => (
  <ContWrapper id={id}>
    <div className={`container ${className}`}>{children}</div>
  </ContWrapper>
);

const ContainerStyle = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  flex-direction: column;
  //background-color: pink;
`;

const ContWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  .container {
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
  }
`;

export default ContWrapper;
