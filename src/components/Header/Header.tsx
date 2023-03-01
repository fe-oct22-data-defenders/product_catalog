import React from 'react';
import { Navbar } from './Navbar';
import { Logo } from '../Logo';

export const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Navbar />
    </header>
  );
};
