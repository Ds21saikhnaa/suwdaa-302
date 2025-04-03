'use client';
import React from 'react';
// import required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import { ImageType } from '@/utils';

type SwiperProp = {
  // images: ImageType[];
  images: string[];
};

export const ImageSwiper = ({ images }: SwiperProp) => (
  <>
    <Swiper pagination={true} modules={[Pagination]} autoHeight>
      {images.map((image, ind) => (
        <SwiperSlide key={ind}>
          <div>
            {/*<Image src={image} alt="image" placeholder="blur" />*/}
            <img src={image} alt="name" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </>
);
