/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './MainSlider.scss';

import { Navigation, Pagination, Autoplay } from 'swiper';

type Props = {
  phones: any[],
};

export const MainSlider: FC<Props> = ({ phones }) => {
  return (
    <div className="MainSlider-container">
      <Swiper
        pagination={{
          el: '.MainSlider__pagination',
          clickable: true,
          renderBullet(index, className) {
            return `<span id="${index}" class="${className}"></span>`;
          },
        }}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.MainSlider__next-button',
          prevEl: '.MainSlider__prev-button',
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="MainSlider"
      >
        {phones.map((phone, i) => (
          <SwiperSlide key={i}>
            <div className="MainSlider__image-container">
              <img
                src={phone}
                alt={phone}
                className="MainSlider__image"
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="MainSlider__pagination" />
      </Swiper>
      <div className="MainSlider__prev-button MainSlider__button" />
      <div className="MainSlider__next-button MainSlider__button" />
    </div>
  );
};
