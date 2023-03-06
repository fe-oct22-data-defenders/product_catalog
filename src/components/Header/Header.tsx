import cn from 'classnames';
import React, { FC, useState } from 'react';
import { Navbar } from './Navbar';
import { Logo } from '../Logo';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export const Header: FC = () => {
  const [cart, favorites] = useLocalStorage();

  const cartItemsNum = cart.reduce(
    (total, prduct) => total + (prduct.counter || 1),
    0,
  );
  const favoriteItemsNum = favorites.length;

  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className={cn('header', {
      'header__menu-list--mobile': isMenuOpen,
    })}
    >
      <Logo />
      <Navbar cartItemsNum={cartItemsNum} favoriteItemsNum={favoriteItemsNum} isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
    </header>
  );
};
