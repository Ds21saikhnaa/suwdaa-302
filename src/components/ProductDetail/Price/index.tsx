// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';
export const Price = ({ price }: { price: string }) => {
  const isDyn = true;
  return (
    <PriceStyle>
      <div className="info">
        <h3 className="price">{price}</h3>
        {isDyn && <p className="flag-dynamic">үнэ тохирно</p>}
      </div>
    </PriceStyle>
  );
};

const PriceStyle = styled.div`
  width: 300px;
  height: 60px;
  margin-top: 10px;
  background-color: #f5e570;
  border-radius: 5px;
  .info {
    padding: 0 30px;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    .price {
      margin: 0 !important;
      font-size: 20px;
    }
    .flag-dynamic {
      margin: 0 !important;
      font-size: 15px;
      line-height: 1;
      color: #666;
    }
  }
`;
