import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Phone } from '../../types/Phone';
import { ButtonAccent } from '../ButtonAccent/ButtonAccent';
import { ButtonFavourite } from '../ButtonFavourite/ButtonFavourite';

type Props = {
  phone: Phone,
  isInCart: boolean;
  isInFavorites: boolean;
  style?: {},
  rootPath: string,
};

export const ProductCard: FC<Props> = ({
  phone,
  isInCart,
  isInFavorites,
  style,
  rootPath,
}) => {
  const [, , addToLocalStorage, removeFromLocalStorage] = useLocalStorage();

  const handleAddtoCartClick = (where: string) => addToLocalStorage(where, {
    ...phone,
    counter: 1,
  });

  return (
    <Link
      to={{ pathname: `/${rootPath}/${phone.phoneId}` }}
      className="phone__link"
    >
      <article className="phone" style={style}>
        <img
          src={phone.image}
          alt={phone.name}
          className="phone__image"
        />

        <h2 className="phone__name">

          {`${phone.name} (iMT9G2FS/A)`}
        </h2>

        <div className="phone__price">
          <h2 className="phone__price--fullPrice">{`$${phone.price}`}</h2>
          <h2 className="phone__price--startPrice">{`$${phone.fullPrice}`}</h2>
        </div>

        <div className="phone__decoration--line" />

        <div className="phone__description">
          <h3 className="phone__description--name">Screen</h3>
          <h2 className="phone__description--property">{phone.screen}</h2>
        </div>
        <div className="phone__description">
          <h3 className="phone__description--name">Capacity</h3>
          <h2 className="phone__description--property">{phone.capacity}</h2>
        </div>
        <div className="phone__description phone__description--last">
          <h3 className="phone__description--name">RAM</h3>
          <h2 className="phone__description--property">{phone.ram}</h2>
        </div>

        <div className="phone__buttons">
          {isInCart
            ? (
              <ButtonAccent
                classNameButton="button-accent button-accent--added"
                text="Added to cart"
                onClick={(event) => {
                  event.preventDefault();
                  removeFromLocalStorage('phones', phone.id, true);
                }}
              />
            ) : (
              <ButtonAccent
                classNameButton="button-accent"
                text="Add to card"
                onClick={(event) => {
                  event.preventDefault();
                  handleAddtoCartClick('phones');
                }}
              />
            )}
          <ButtonFavourite
            isInFavorites={isInFavorites}
            phone={phone}
          />
        </div>
      </article>
    </Link>
  );
};
