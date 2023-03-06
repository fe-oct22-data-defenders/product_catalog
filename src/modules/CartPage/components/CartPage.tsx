import React, { memo, useState } from 'react';
import { ButtonAccent } from '../../../components/ButtonAccent/ButtonAccent';
import { ButtonBack } from '../../../components/ButtonBack/ButtonBack';
import { CartItem } from '../../../components/CartItem/CartItem';
import phonesFromServer from '../../../public/api/phones.json';
import './CartPage.scss';

export const CartPage: React.FC = memo(() => {
  const [phones] = useState(phonesFromServer);
  const visiblePhones = phones.slice(1, 4);

  const total = [...visiblePhones.map(phone => phone.price)]
    .reduce((acc, prev) => acc + prev);

  return (
    <section className="cart-page">
      <div className="cart-page__back-button"><ButtonBack /></div>
      <h1 className="cart-page__title">Cart</h1>
      <div className="grid">
        <div className="
        grid__item
        grid__item--1-4
        grid__item--tablet-1-12
        grid__item--desktop-1-16"
        >
          {visiblePhones.map(phone => (
            <CartItem
              key={phone.id}
              phone={phone}
            />
          ))}
        </div>
        <div
          className="
          grid__item
          grid__item--1-4
          grid__item--tablet-1-12
          grid__item--desktop-17-24"
        >
          <div className="checkout">
            <div className="checkout-price">{`$${total}`}</div>
            <div className="checkout-subtitle">{`Total for ${phones.length} items`}</div>
            <ButtonAccent
              classNameButton="checkout-button"
              text="Checkout"
            />
          </div>
        </div>
      </div>
    </section>
  );
});
