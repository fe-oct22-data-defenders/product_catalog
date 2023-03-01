import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { PageNavLink } from './PageNavLink/PageNavLink';
import heartLikeIcon from '../../../public/header-icons/heart.svg';
import shoppingBagIcon from '../../../public/header-icons/shopcart.svg';
import menuIcon from '../../../public/header-icons/menu.svg';
import { NavLink } from '../../../types/NavLink';

const navLinks: NavLink[] = [
  {
    id: 1,
    adress: '/',
    text: 'Home',
  },
  {
    id: 2,
    adress: '/',
    text: 'Phones',
  },
  {
    id: 3,
    adress: '/',
    text: 'Tablets',
  },
  {
    id: 4,
    adress: '/',
    text: 'Accessories',
  },
];

export const Navbar: FC = memo(() => {
  return (
    <>
      <nav
        className="navbar"
      >
        <ul className="menu-list">
          {navLinks.map(navLink => (
            <li key={navLink.id}>
              <PageNavLink
                to={navLink.adress}
                text={navLink.text}
              />
            </li>
          ))}
        </ul>
      </nav>
      <ul className="shopcard-control">
        <li>
          <Link to="favorites">
            <img src={heartLikeIcon} alt="favorites" />
          </Link>
        </li>
        <li>
          <Link to="card">
            <img src={shoppingBagIcon} alt="card" />
          </Link>
        </li>
      </ul>
      <div className="menu-btn">
        <img src={menuIcon} alt="menu" />
      </div>
    </>
  );
});
