'use client';
import { useRouter } from 'next/navigation';

import { ProductCartHomeStyle } from '@/components/ProductCart/Home/index.style';
import { formatMoney, PRODUCTDETAILROOT } from '@/utils';

export const ProductCartHome = () => {
  const router = useRouter();
  return (
    <ProductCartHomeStyle onClick={() => router.push(`${PRODUCTDETAILROOT}/bla2`)}>
      <div className="image-container">
        <img src="https://cdn1.unegui.mn/media/cache1/6d/99/6d99baa33f80ab95f3cff5faf7351fc8.webp" alt="alt" />
      </div>
      <div className="price">{formatMoney(3213122)}</div>
      <div className="p-name">prius 20</div>
    </ProductCartHomeStyle>
  );
};
