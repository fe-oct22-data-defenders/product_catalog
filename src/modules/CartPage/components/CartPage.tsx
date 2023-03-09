import React, {
  memo, useEffect, useState,
} from 'react';
import { ButtonAccent } from '../../../components/ButtonAccent/ButtonAccent';
import { ButtonBack } from '../../../components/ButtonBack/ButtonBack';
import { CartItem } from '../../../components/CartItem/CartItem';
import { PurchaseModal } from '../../../components/PurchaseModal';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import './CartPage.scss';

export const CartPage: React.FC = memo(() => {
  const [cart] = useLocalStorage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, , , removeFromLocalStorage] = useLocalStorage();

  const toggleModal = () => {
    removeFromLocalStorage('phones', undefined, true);
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isModalOpen]);

  const productsTotal = cart.reduce(
    (total, product) => total + product.price * (product.counter || 1),
    0,
  );

  const itemsNum = cart.reduce((total, prduct) => (
    total + (prduct.counter || 1)
  ), 0);

  return (
    <div className="container">
      <section className="cart-page">
        <div className="cart-page__back-button"><ButtonBack /></div>
        <h1 className="cart-page__title">Cart</h1>
        {itemsNum !== 0 && (
          <div className="grid">
            <div className="
              grid__item
              grid__item--1-4
              grid__item--tablet-1-12
              grid__item--desktop-1-16"
            >
              {cart.map(phone => (
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
                <div className="checkout-price">{`$${productsTotal}`}</div>
                <div className="checkout-subtitle">{`Total for ${itemsNum} items`}</div>
                <ButtonAccent
                  classNameButton="checkout-button"
                  text="Checkout"
                  onClick={() => toggleModal()}
                />
              </div>
            </div>
          </div>
        )}

        {itemsNum === 0 && (
          <p className="cart-page__without-product">
            You have not chosen product yet
          </p>
        )}
      </section>

      {isModalOpen && <PurchaseModal onClose={toggleModal} />}
    </div>
  );
});
