'use client';
// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';

export const ProductCartHomeStyle = styled.div`
  width: 100%;
  .image-container {
    background: #c1c1c1;
    margin-bottom: 4px;
    text-align: center;
    height: 220px;
    border-radius: 5px;
    position: relative;
    box-sizing: border-box;
    img {
      display: block;
      object-fit: cover;
      width: 100%;
      max-height: 100%;
      border-radius: 5px;
    }
  }
  .price {
    font-size: 15px;
    color: #000;
    font-weight: 600;
    line-height: 17px;
  }
  .p-name {
    font-size: 15px;
    color: #000;
  }
`;
