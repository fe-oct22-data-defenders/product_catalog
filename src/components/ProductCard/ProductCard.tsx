import React, { FC } from 'react';
import { ButtonAccent } from '../ButtonAccent/ButtonAccent';
import { ButtonFavourite } from '../ButtonFavourite/ButtonFavourite';

type Props = {
  name: string,
  image: string,
  fullPrice: number,
  price: number,
  screen: string,
  capacity: string,
  ram: string,
};

export const ProductCard: FC<Props> = ({
  name,
  image,
  fullPrice,
  price,
  screen,
  capacity,
  ram,
}) => {
  return (
    <article className="phone">
      <img
        src={image}
        alt={name}
        className="phone__image"
      />

      <section className="phone__about">
        <h2 className="phone__name">
          <a
            href="/"
            className="phone__name--link"
          >
            {`${name} (iMT9G2FS/A)`}
          </a>
        </h2>

        <div className="phone__price">
          <h2 className="phone__price--fullPrice">{`$${fullPrice}`}</h2>
          <h2 className="phone__price--startPrice">{`$${price}`}</h2>
        </div>
      </section>

      <div className="phone__decoration--line" />

      <div className="phone__description">
        <h3 className="phone__description--name">Screen</h3>
        <h2 className="phone__description--property">{screen}</h2>
      </div>
      <div className="phone__description">
        <h3 className="phone__description--name">Capacity</h3>
        <h2 className="phone__description--property">{capacity}</h2>
      </div>
      <div className="phone__description">
        <h3 className="phone__description--name">RAM</h3>
        <h2 className="phone__description--property">{ram}</h2>
      </div>

      <div className="phone__buttons">
        <ButtonAccent
          classNameButton="button-accent"
          text="Add to card"
        />
        <ButtonFavourite />
      </div>
    </article>
  );
};
