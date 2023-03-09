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
    <ButtonBack />
  );
});
