'use client';
import { EffectCube, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';

import { BigData, DataType } from '@/app/data';

import { ContainerWrap } from './page.style';

export const Word = () => (
  <ContainerWrap>
    <div className="text-block">
      <Swiper
        effect="cube"
        cubeEffect={{
          shadow: false,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        autoHeight
      >
        {BigData.map((el: DataType, ind) => (
          <SwiperSlide key={ind}>
            <div className="item">
              {el.text}
              {el.image && <img className="cute-image" src={el.image} alt="bi chamd hairtai" />}
              {el.gip && (
                <div style={{ width: '200px', height: '200px', pointerEvents: 'none' }}>
                  <iframe src={el.gip} width="200" height="200" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                </div>
              )}
              {el.link && (
                <a href={el.link}>
                  <br />
                  👉 namaig daraad uzee 🤭
                </a>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </ContainerWrap>
);
