import React, { FC } from 'react';
import Slider from 'react-slick';

import './ProductSlider.scss';
import 'slick-carousel/slick/slick.css';

type Props = {
  phoneImages: string[],
  name: string,
};

export const ProductSlider: FC<Props> = ({ phoneImages, name }) => {
  const settings = {
    customPaging: (i = 0) => {
      return (
        <div className="product-slider__pagination-image-container">
          <img
            className="product-slider__pagination-image"
            src={phoneImages[i]}
            alt={name}
          />
        </div>
      );
    },
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    dotsClass: 'product-slider__pagination',
    autoplay: true,
  };

  return (
    <>
      <Slider
        {...settings}
        className="product-slider"
      >
        {phoneImages.map(phoneImage => (
          <div
            className="product-slider__image-container"
            key={phoneImage}
          >
            <img
              src={phoneImage}
              alt={phoneImage}
              className="product-slider__image"
            />
          </div>
        ))}
      </Slider>
    </>
  );
};
