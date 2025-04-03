'use client';

import React from 'react';

import { MainPoem } from '@/utils';

import { ContainerWrap } from './page.style';

export const Poemr = () => (
  <ContainerWrap>
    <div className="text-block">
      <div className="item">
        {MainPoem.map((poem, index) => (
          <div key={index}>{poem === '' ? <br /> : <p>{poem}</p>}</div>
        ))}
      </div>
    </div>
  </ContainerWrap>
);
