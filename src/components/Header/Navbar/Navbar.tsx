import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { PageNavLink } from './PageNavLink/PageNavLink';
import { HeartLikeIcon, ShoppingBagIcon, MenuIcon } from '../../SVG';

export const Navbar: FC = memo(() => {
  return (
    <>
      <nav
        className="navbar"
      >
        <ul className="menu-list">
          <li><PageNavLink to="/" text="Home" /></li>
          <li><PageNavLink to="phones" text="Phones" /></li>
          <li><PageNavLink to="tablets" text="Tablets" /></li>
          <li><PageNavLink to="accessories" text="Accessories" /></li>
        </ul>
      </nav>
      <ul className="shopcard-control">
        <li><Link to="favorites"><HeartLikeIcon /></Link></li>
        <li><Link to="card"><ShoppingBagIcon /></Link></li>
      </ul>
      <div className="menu-btn"><MenuIcon /></div>
    </>
  );
});
