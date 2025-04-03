'use client';
// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';

export const ProductCartListStyle = styled.div`
  font-size: 0;
  margin-bottom: 24px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  max-width: 870px;
  width: 840px;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  .image-container {
    width: 530px;
    height: 360px;
    img {
      display: block;
      object-fit: cover;
      width: 100%;
      height: 100%;
      max-height: 100%;
      border-radius: 5px;
    }
  }
  .detail {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px 20px 20px 20px;
    width: 340px;
    .price {
      margin-bottom: 10px;
      font-size: 20px;
      color: #000;
      font-weight: 700;
      line-height: 20px;
    }
    .p-name {
      font-size: 20px;
      color: #000;
      line-height: 26px;
    }
    .more {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .more-info {
        display: flex;
        flex-direction: column;
        p {
          padding: 0;
          margin: 0;
          color: #777;
          font-size: 14px;
          line-height: 18px;
        }
      }
    }
  }
`;
