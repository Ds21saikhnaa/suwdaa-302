'use client';
import { useRouter } from 'next/navigation';

import ProductSlugStyle from '@/app/product/[slug]/index.style';
import { Attribute, CustomContact, Price, ProductImage } from '@/components/ProductDetail';
import { SuggestionProducts } from '@/components/Suggetion/Products';
import { ProductDummy as product } from '@/config';
import { formatMoney } from '@/utils';

export default function Page() {
  const router = useRouter();

  return (
    <ProductSlugStyle>
      <p>Breadcrumb</p>
      <div className="row-containar">
        <div className="detail">
          <h2 className="name">{product.name}</h2>
          <p className="location">{product.location}</p>
          <p className="date">{product.createdAt}</p>
          <ProductImage images={product.images} />
          <Attribute attributes={product.attributes} />
          <div className="content" dangerouslySetInnerHTML={{ __html: product.content }} />
          <div className="view">
            <a className="back" onClick={() => router.back()}>
              Буцах
            </a>
            <p className="count">Үзсэн : {product.view}</p>
          </div>
          <SuggestionProducts />
        </div>
        <div className="user-friendly">
          <Price price={formatMoney(product.price) as string} />
          <CustomContact name="Дугаар харах" bottom={product.user.phone} />
          {/*<CustomContact />*/}
          <p>marketing</p>
        </div>
      </div>
    </ProductSlugStyle>
  );
}
