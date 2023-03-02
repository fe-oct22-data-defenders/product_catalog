import './MobileMenu.scss';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { NavbarMenuLink } from '../Header/Navbar/PageNavLink/PageNavLink';
import heartLikeIcon from '../../public/header-icons/heart.svg';
import shoppingBagIcon from '../../public/header-icons/shopcart.svg';
// import { NavLinkType } from '../../types/NavLinkType';

export const MobileMenu: React.FC = () => {
  return (
    <nav className="page__menu menu">
      <div className="menu__content">
        <ul className="menu__list">
          <li className="menu__item">
            <NavbarMenuLink to="/" text="Home" />
          </li>
          <li className="menu__item">
            <NavbarMenuLink to="phones" text="Phones" />
          </li>
          <li className="menu__item">
            <NavbarMenuLink to="tablets" text="Tablets" />
          </li>
          <li className="menu__item">
            <NavbarMenuLink to="accessories" text="Accessories" />
          </li>
        </ul>
        <div className="menu-icons">
          <NavLink to="/" className="menu__link">
            <img alt="favorites" src={heartLikeIcon} />
          </NavLink>
          <NavLink to="/" className="menu__link">
            <img alt="cart" src={shoppingBagIcon} />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
