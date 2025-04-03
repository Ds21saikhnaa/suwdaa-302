'use client';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, RefreshCcw, RefreshCw, RotateCcw, RotateCw, X, ZoomIn, ZoomOut } from 'react-feather';
import Image from 'rc-image';
import { EffectCube, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'rc-image/assets/index.css';

import { ImageProviderStyle } from '@/components/ProductDetail/ProductImage/index.style';

export const imagePreviewIcons = {
  rotateLeft: <RotateCcw />,
  rotateRight: <RotateCw />,
  zoomIn: <ZoomIn />,
  zoomOut: <ZoomOut />,
  close: <X />,
  left: <ChevronLeft />,
  right: <ChevronRight />,
  flipX: <RefreshCcw />,
  flipY: <RefreshCw />,
};

export default interface ProductImagesProps {
  images: Array<string>;
}
export const ProductImage = ({ images }: ProductImagesProps) => {
  const [idx, setIdx] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setIdx(0);
  }, [images, images.length]);

  const selectImg = (ind: number) => {
    setIdx(ind);
  };

  if (!images.length) return;

  return (
    <ImageProviderStyle>
      <Image.PreviewGroup
        icons={imagePreviewIcons}
        items={images}
        preview={{
          visible: open,
          current: idx,
          onVisibleChange: () => setOpen(false),
          onChange: (current) => setIdx(current),
        }}
      />
      <Swiper
        effect="cube"
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper hideDesktop"
      >
        {images.map((image, ind) => (
          <SwiperSlide key={ind}>
            <img
              onClick={() => {
                setOpen(true);
                selectImg(ind);
              }}
              key={ind}
              src={image}
              alt={`image-${ind}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="image-container hideMobile">
        <img className="main-image" src={images[idx]} alt="main-image" onClick={() => setOpen(true)} />
      </div>
      <div className="often-images hideMobile">
        {images.length > 0
          ? images.map((image, ind) => <img onClick={() => selectImg(ind)} key={ind} src={image} alt={`image-${ind}`} />)
          : null}
      </div>
    </ImageProviderStyle>
  );
};
