import cn from 'classnames';
import React, { FC, memo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PageNavLink } from './PageNavLink/PageNavLink';
import heartLikeIcon from '../../../public/header-icons/heart.svg';
import shoppingBagIcon from '../../../public/header-icons/shopcart.svg';
import menuIcon from '../../../public/header-icons/menu.svg';
import closeMenu from '../../../public/header-icons/Union.svg';
import { NavLinkType } from '../../../types/NavLinkType';

const navLinks: NavLinkType[] = [
  {
    id: 1,
    adress: '/',
    text: 'Home',
  },
  {
    id: 2,
    adress: 'phones',
    text: 'Phones',
  },
  {
    id: 3,
    adress: 'tablets',
    text: 'Tablets',
  },
  {
    id: 4,
    adress: 'accessories',
    text: 'Accessories',
  },
];

export const Navbar: FC = memo(() => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <nav className="navbar">
        <ul className="navbar__menu-list">
          {navLinks.map((navLink) => (
            <li key={navLink.id} className="navbar__menu-list-li">
              <PageNavLink to={navLink.adress} text={navLink.text} />
            </li>
          ))}
        </ul>
      </nav>
      <ul className="navbar__shopcard-control">
        <li>
          <NavLink
            className={({ isActive }) => (
              cn('navbar__shopcard-control-link', {
                'navbar__menu-list-link--active': isActive,
              })
            )}
            to="favorites"
          >
            <img src={heartLikeIcon} alt="favorites" />
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (
              cn('navbar__shopcard-control-link', {
                'navbar__menu-list-link--active': isActive,
              })
            )}
            to="card"
          >
            <img src={shoppingBagIcon} alt="card" />
          </NavLink>
        </li>
      </ul>
      <div className="navbar__menu-btn">
        { !menuOpen ? (
          <NavLink to="/" className="burger__link" onClick={handleMenu}>
            <img src={menuIcon} alt="menu" />
          </NavLink>
        ) : (
          <NavLink to="/" className="burger__link" onClick={handleMenu}>
            <img src={closeMenu} alt="closeMenu" />
          </NavLink>
        )}
      </div>
    </nav>
  );
});
