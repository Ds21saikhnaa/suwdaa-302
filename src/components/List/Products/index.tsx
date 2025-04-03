import { ProductCartList } from '@/components';

import { NewProductProviderStyle, NewProductStyle } from './index.style';

export const ListProducts = () => (
  <NewProductStyle>
    <h2 className="title">Cat name</h2>
    <NewProductProviderStyle>
      <ProductCartList />
      <ProductCartList />
      <ProductCartList />
      <ProductCartList />
      <ProductCartList />
      <ProductCartList />
      <ProductCartList />
      <ProductCartList />
      <ProductCartList />
      <ProductCartList />
      <ProductCartList />
    </NewProductProviderStyle>
  </NewProductStyle>
);
