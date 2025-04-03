import { ProductCartHome } from '@/components';

import { NewProductProviderStyle, NewProductStyle } from './index.style';

export const NewProducts = () => (
  <NewProductStyle>
    <h2 className="title">Шинэ зарууд</h2>
    <NewProductProviderStyle>
      <ProductCartHome />
      <ProductCartHome />
      <ProductCartHome />
      <ProductCartHome />
      <ProductCartHome />
      <ProductCartHome />
      <ProductCartHome />
      <ProductCartHome />
      <ProductCartHome />
      <ProductCartHome />
    </NewProductProviderStyle>
  </NewProductStyle>
);
