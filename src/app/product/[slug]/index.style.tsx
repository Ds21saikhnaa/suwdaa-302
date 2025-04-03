// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';

const ProductSlugStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  .row-containar {
    display: flex;
    flex-direction: row;
    gap: 10px;
    @media (max-width: 992px) {
      flex-direction: column;
    }
    .detail {
      width: 870px;
      @media (max-width: 992px) {
        width: 100%;
      }
      .name {
        font-size: 36px;
        line-height: 40px;
        word-wrap: break-word;
        color: #000;
        margin: 5px 0 !important;
        @media (max-width: 992px) {
          font-size: 24px;
          line-height: 28px;
        }
      }
      .view {
        display: flex;
        flex-direction: row;
        //width: 100%;
        justify-content: space-between;
        .count {
          font-size: 14px;
          color: #666;
          float: right;
        }
        .back {
          font-size: 14px;
          color: #0086bf;
          text-decoration: none;
          position: relative;
          display: inline-block;
          vertical-align: top;
          &::before {
            content: '«';
            display: inline-block;
            text-decoration: none;
            margin-right: 5px;
          }
        }
      }
      .location {
        text-decoration: none;
        border-bottom: 1px dotted;
        display: inline-block;
        line-height: 15px;
        color: #0086bf;
        outline: none;
        position: relative;
        margin: 5px 0 !important;
      }
      .date {
        margin: 0 0 20px 0 !important;
      }
    }
    .user-friendly {
      display: flex;
      flex-direction: column;
      width: 300px;
    }
  }
`;

export default ProductSlugStyle;
