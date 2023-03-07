import React from 'react';
import { Navbar } from './Navbar';
import { Logo } from '../Logo';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export const Header = () => {
  const [cart, favorites] = useLocalStorage();

  const cartItemsNum = cart.reduce(
    (total, prduct) => total + (prduct.counter || 1),
    0,
  );
  const favoriteItemsNum = favorites.length;

  return (
    <header className="header">
      <Logo />
      <Navbar cartItemsNum={cartItemsNum} favoriteItemsNum={favoriteItemsNum} />
    </header>
  );
};
