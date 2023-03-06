import cn from 'classnames';
import React, { FC, useState } from 'react';
import { Navbar } from './Navbar';
import { Logo } from '../Logo';

export const Header: FC = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className={cn('header', {
      'header__menu-list--mobile': isMenuOpen,
    })}
    >
      <Logo />
      <Navbar isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
    </header>
  );
};
