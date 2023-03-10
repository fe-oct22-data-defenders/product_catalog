/* eslint-disable max-len */
import React, {
  FC,
  memo,
} from 'react';
import { ButtonAccent } from '../../../components/ButtonAccent/ButtonAccent';
import { ButtonBack } from '../../../components/ButtonBack/ButtonBack';
import { ButtonFavourite } from '../../../components/ButtonFavourite/ButtonFavourite';
import { HomeButtonPlus } from '../../../components/HomeButtonPlus';
import './ProductPage.scss';
import col1 from '../../../public/img/productItem/Color1.svg';
import col2 from '../../../public/img/productItem/color2.svg';
import col3 from '../../../public/img/productItem/color3.svg';
import col4 from '../../../public/img/productItem/color4.svg';
// import ph from '../../../public/img/productItem/Previews.svg';
import ph1 from '../../../public/img/productItem/Photo.svg';

export const ProductPage: FC = memo(() => {
  return (
    <div className="container">
      <section className="product-page">
        <div className="button-home">
          <HomeButtonPlus category="Phones" itemName="Iphone" />
        </div>
        <div className="back-button">
          <ButtonBack />
        </div>
        <article className="product__item">
          <h1 className="product__item-title">Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)</h1>
          <div className="grid product__item-main">
            <div
              className="
              grid__item
              grid__item--1-4
              grid__item--tablet-1-6
              grid__item--desktop-1-12"
            >
              {/* <img src={ph} alt="photos" /> */}
              <img src={ph1} alt="photos" className="product__item-photos" />
            </div>

            <div className="
            product__item__options
            grid__item
            grid__item--1-4
            grid__item--tablet-8-12
            grid__item--desktop-14-20"
            >
              <div className="product__item__options__title">
                <h5 className="product__item__options__title-available">
                  Available colors
                </h5>

                <p className="product__item__options__title-id">
                  ID: 802390
                </p>
              </div>

              <div className="product__item__options__colors">
                <img src={col1} alt="color 1" />
                <img src={col2} alt="color 1" />
                <img src={col3} alt="color 1" />
                <img src={col4} alt="color 1" />
              </div>

              <div className="product__item__options__capacity">
                <p className="product__item__options__capacity-title">
                  Select capacity
                </p>
                <button
                  type="button"
                  className="product__item__options__capacity-btn-def"
                >
                  64 GB
                </button>
                <button
                  type="button"
                  className="product__item__options__capacity-btn"
                >
                  256 GB
                </button>
                <button
                  type="button"
                  className="product__item__options__capacity-btn"
                >
                  512 GB
                </button>
              </div>

              <div className="product__item__options__order">
                <div className="product__item__options__order-price">
                  <p className="product__item__options__order-price--new">
                    $799
                  </p>
                  <p className="product__item__options__order-price--old">
                    $1199
                  </p>
                </div>
                <div className="phone__buttons">
                  <ButtonAccent
                    classNameButton="button-accent"
                    text="Add to card"
                    onClick={() => { }}
                  />
                  <ButtonFavourite isInFavorites />
                </div>
              </div>
              <div className="product__item__options-details">
                <div className="product__item__options-details-one">
                  <p
                    className="product__item__options-details-one-key"
                  >
                    Screen
                  </p>
                  <p
                    className="product__item__options-details-one-values"
                  >
                    6.5” OLED
                  </p>
                </div>
                <div className="product__item__options-details-one">
                  <p
                    className="product__item__options-details-one-key"
                  >
                    Resolution
                  </p>
                  <p
                    className="product__item__options-details-one-values"
                  >
                    2688x1242
                  </p>
                </div>
                <div className="product__item__options-details-one">
                  <p
                    className="product__item__options-details-one-key"
                  >
                    Processor
                  </p>
                  <p
                    className="product__item__options-details-one-values"
                  >
                    Apple A12 Bionic
                  </p>
                </div>
                <div className="product__item__options-details-one">
                  <p
                    className="product__item__options-details-one-key"
                  >
                    RAM
                  </p>
                  <p
                    className="product__item__options-details-one-values"
                  >
                    3 GB
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about grid">
            <div className="
              grid__item
              grid__item--1-4
              grid__item--tablet-1-12
              grid__item--desktop-1-12"
            >
              <h2 className="about__title">About</h2>
              <div>
                <h3 className="about__subtitle">And then there was Pro</h3>
                <p className="about__par">
                  A transformative triple‑camera system that adds tons of capability without complexity.
                </p>
                <p className="about__par">
                  An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.
                </p>
              </div>

              <div>
                <h3 className="about__subtitle">Camera</h3>
                <p className="about__par">
                  Meet the first triple‑camera system to combine cutting‑edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest‑quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.
                </p>
              </div>

              <div>
                <h3 className="about__subtitle">Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.</h3>
                <p className="about__par">
                  iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.
                </p>
              </div>
            </div>

            <div className="
              grid__item
              grid__item--1-4
              grid__item--tablet-1-12
              grid__item--desktop-14-24"
            >
              <h2 className="about__title">Tech specs</h2>
              <div className="product__item__options-details">

                <div className="product__item__options-details-one">
                  <p
                    className="product__item__options-details-one-key"
                  >
                    Screen
                  </p>
                  <p
                    className="product__item__options-details-one-values"
                  >
                    6.5” OLED
                  </p>
                </div>
                <div className="product__item__options-details-one">
                  <p
                    className="product__item__options-details-one-key"
                  >
                    Resolution
                  </p>

                  <p
                    className="product__item__options-details-one-values"
                  >
                    2688x1242
                  </p>
                </div>
                <div className="product__item__options-details-one">
                  <p
                    className="product__item__options-details-one-key"
                  >
                    Processor
                  </p>
                  <p
                    className="product__item__options-details-one-values"
                  >
                    Apple A12 Bionic
                  </p>
                </div>
                <div className="product__item__options-details-one">
                  <p
                    className="product__item__options-details-one-key"
                  >
                    RAM
                  </p>
                  <p
                    className="product__item__options-details-one-values"
                  >
                    3 GB
                  </p>
                </div>
                <div className="product__item__options-details-one">
                  <p
                    className="product__item__options-details-one-key"
                  >
                    Built in memory
                  </p>
                  <p
                    className="product__item__options-details-one-values"
                  >
                    64 GB
                  </p>
                </div>
                <div className="product__item__options-details-one">
                  <p
                    className="product__item__options-details-one-key"
                  >
                    Camera
                  </p>
                  <p
                    className="product__item__options-details-one-values"
                  >
                    12 Mp + 12 Mp + 12 Mp (Triple)
                  </p>
                </div>
                <div className="product__item__options-details-one">
                  <p
                    className="product__item__options-details-one-key"
                  >
                    Zoom
                  </p>
                  <p
                    className="product__item__options-details-one-values"
                  >
                    Optical, 2x
                  </p>
                </div>
                <div className="product__item__options-details-one">
                  <p
                    className="product__item__options-details-one-key"
                  >
                    Cell
                  </p>
                  <p
                    className="product__item__options-details-one-values"
                  >
                    GSM, LTE, UMTS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
});
