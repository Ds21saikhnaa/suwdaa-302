'use client';
import { useRouter } from 'next/navigation';

import { ProductCartListStyle } from '@/components/ProductCart/List/index.style';
import { formatMoney, PRODUCTDETAILROOT } from '@/utils';

export const ProductCartList = () => {
  const router = useRouter();
  return (
    <ProductCartListStyle onClick={() => router.push(`${PRODUCTDETAILROOT}/bla2`)}>
      <div className="image-container">
        <img src="https://cdn1.unegui.mn/media/cache1/6d/99/6d99baa33f80ab95f3cff5faf7351fc8.webp" alt="alt" />
      </div>
      <div className="detail">
        <div>
          <div className="price">{formatMoney(3213122)}</div>
          <div className="p-name"> Toyota Sai, 2013/2020</div>
        </div>
        <div className="more">
          <div className="more-info">
            <p>13 минутын өмнө</p>
            <p>УБ — Сүхбаатар</p>
          </div>
          <img src="https://www.unegui.mn/static/images/advert/favorite.svg" alt="fav" />
        </div>
      </div>
    </ProductCartListStyle>
  );
};
