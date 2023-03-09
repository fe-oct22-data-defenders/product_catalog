/* eslint-disable max-len */
import React, { memo, useEffect, useState } from 'react';
import { getCheapestPhones, getNewestPhones } from '../../../api/phones';
import { Categories } from '../../../components/Categories';
import { MainSlider } from '../../../components/MainSlider';
import { SecondSlider } from '../../../components/SecondSlider';
import { Phone } from '../../../types/Phone';
import './HomePage.scss';

import mainBaner from '../../../public/img/swiper-banners/main-banner.jpg';
import phonesBaner from '../../../public/img/swiper-banners/banner-phones.png';
// eslint-disable-next-line max-len
import tabletsBaner from '../../../public/img/swiper-banners/banner-tablets.png';
// eslint-disable-next-line max-len
import accessoriesBaner from '../../../public/img/swiper-banners/category-accessories.png';
import smallBaner from '../../../public/img/swiper-banners/small-baner.png';

const phonesForBigScreens = [mainBaner, phonesBaner, tabletsBaner, accessoriesBaner];
const phonesForSmallScreens = [smallBaner, smallBaner, smallBaner, smallBaner];

export const HomePage: React.FC = memo(() => {
  const [phones, setPhones] = useState(phonesForSmallScreens);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(
    document.fullscreenElement !== null,
  );
  const [isForSmall, setIsForSmall] = useState(false);
  const [newestPhones, setNewestPhones] = useState<Phone[]>([]);
  const [hotPricesPhones, setHotPricesPhones] = useState<Phone[]>([]);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
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
    if (windowSize.width >= 640) {
      setPhones(phonesForBigScreens);
      setIsForSmall(false);
    } else {
      setPhones(phonesForSmallScreens);
      setIsForSmall(true);
    }
  }, [windowSize, isFullScreen]);

  useEffect(() => {
    handleResize();
  }, [window.innerHeight, window.innerWidth]);

  const loadGoods = async () => {
    try {
      const newest = await getNewestPhones();
      const cheapest = await getCheapestPhones();

      setNewestPhones(newest.data);
      setHotPricesPhones(cheapest.data);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  useEffect(() => {
    loadGoods();
  }, []);

  return (
    <section className="home-page">
      <div className="container">
        <h1 className="home-page__title">Welcome to Nice Gadgets store!</h1>
      </div>

      {!isForSmall && (
        <div className="container">
          <div className="home-page__main-slider">
            <MainSlider phones={phones} />
          </div>
        </div>
      )}

      {isForSmall && (
        <div className="home-page__main-slider">
          <MainSlider phones={phones} />
        </div>
      )}

      <div className="container">
        <div className="home-page__section">
          <SecondSlider
            phones={newestPhones}
            text="Brand new models"
            sliderClass="New"
          />
        </div>

        <div className="home-page__section">
          <Categories />
        </div>

        <div className="home-page__section">
          <SecondSlider
            phones={hotPricesPhones}
            text="Hot prices"
            sliderClass="Discount"
          />
        </div>
      </div>
    </section>
  );
});
