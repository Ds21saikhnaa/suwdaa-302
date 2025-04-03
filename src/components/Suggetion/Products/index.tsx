import { ProductCartHome } from '@/components';

import { NewProductProviderStyle, NewProductStyle } from './index.style';

export const SuggestionProducts = () => (
  <NewProductStyle>
    <h2 className="title">Ижил зарууд</h2>
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
