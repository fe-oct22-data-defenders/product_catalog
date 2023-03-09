import React, { FC, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Pagination, Navigation, Autoplay,
} from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './SecondSlider.scss';

import { Phone } from '../../types/Phone';
import { ProductCard } from '../ProductCard/ProductCard';
import { useLocalStorage } from '../../hooks/useLocalStorage';

type Props = {
  phones: Phone[],
  text: string,
};

export const SecondSlider: FC<Props> = ({ phones, text }) => {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(
    document.fullscreenElement !== null,
  );
  const [cart, favourite] = useLocalStorage();
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [slidesPerPage, setSlidesPerPage] = useState<number>(4);
  const [height, setHeight] = useState<number>(528);

  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    if (window.innerWidth >= 640) {
      setHeight(528);
    } else {
      setHeight(440);
    }
  }

  function handleFullScreenChange() {
    setIsFullScreen(document.fullscreenElement !== null);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    document.addEventListener('fullscreenchange', handleFullScreenChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
    };
  }, []);

  useEffect(() => {
    if (windowSize.width > 1200) {
      setSlidesPerPage(4);
    } else if (windowSize.width < 1200 && windowSize.width >= 1024) {
      setSlidesPerPage(3);
    } else if (windowSize.width < 850 && windowSize.width >= 640) {
      setSlidesPerPage(2);
    } else if (windowSize.width < 640) {
      setSlidesPerPage(1);
    }
  }, [windowSize, isFullScreen]);

  useEffect(() => {
    handleResize();
  }, [window.innerHeight, window.innerWidth]);

  return (
    <div className="SecondSlider__swiper-container">
      <Swiper
        pagination={{
          el: '.SecondSlider__swiper-pagination',
          clickable: true,
          dynamicBullets: true,
          renderBullet(index, className) {
            return `<span class="${className}">${index + 1}</span>`;
          },
          hideOnClick: true,
        }}
        coverflowEffect={{
          rotate: 100,
          stretch: 5,
          depth: 900,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay
        speed={1000}
        navigation={{
          nextEl: '.SecondSlider__swiper-next-button',
          prevEl: '.SecondSlider__swiper-prev-button',
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="SecondSlider__swiper"
        tag="section"
        wrapperTag="ul"
        slidesPerView={slidesPerPage}
        spaceBetween={16}
        height={height}
      >
        {phones.map(phone => {
          const isInCart = cart.some(telephone => telephone.id === phone.id);
          const isInFavorites = favourite.some(
            telephone => telephone.id === phone.id,
          );

          return (
            <SwiperSlide key={phone.id}>
              <ProductCard
                phone={phone}
                isInCart={isInCart}
                isInFavorites={isInFavorites}
                style={{ height: `${height}px` }}
                key={phone.id}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="SecondSlider__swiper-manipulation">
        <h3 className="SecondSlider__swiper-title">{text}</h3>
        <div className="button-container">
          <div className="SecondSlider__swiper-prev-button" />
          <div className="SecondSlider__swiper-next-button" />
        </div>
      </div>
    </div>
  );
};
