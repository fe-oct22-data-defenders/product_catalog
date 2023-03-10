import React, { FC, memo, useEffect } from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { PageNavLink } from './PageNavLink/PageNavLink';
import heartLikeIcon from '../../../public/header-icons/heart.svg';
import shoppingBagIcon from '../../../public/header-icons/shopcart.svg';
import menuIcon from '../../../public/header-icons/menu.svg';
import closeMenu from '../../../public/header-icons/Union.svg';
import { NavLinkType } from '../../../types/NavLinkType';
import './Navbar.scss';

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

interface Props {
  cartItemsNum:number;
  favoriteItemsNum: number;
  isMenuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: FC<Props> = memo(({
  isMenuOpen,
  setMenuOpen,
  cartItemsNum,
  favoriteItemsNum,
}) => {
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('scroll-disable');
    } else {
      document.body.classList.remove('scroll-disable');
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav className="navbar">
        <ul className={cn('navbar__menu-list', {
          'navbar__menu-list--mobile': isMenuOpen,
        })}
        >
          {navLinks.map((navLink) => (
            <li key={navLink.id} className="navbar__menu-list-li">
              <PageNavLink
                to={navLink.adress}
                text={navLink.text}
                setMenuOpen={setMenuOpen}
              />
            </li>
          ))}
        </ul>
      </nav>
      <ul className={cn('navbar__shopcard-control', {
        'navbar__shopcard-control--mobile': isMenuOpen,
      })}
      >
        <li className={cn('navbar__shopcard-control-item', {
          'navbar__shopcard-control--item--mobile': isMenuOpen,
        })}
        >
          <NavLink
            className={({ isActive }) => (
              cn('navbar__shopcard-control-link', {
                'navbar__menu-list-link--active': isActive,
                'navbar__menu-list-link--mobile': isMenuOpen,
              })
            )}
            to="favorites"
            onClick={() => setMenuOpen(false)}
          >
            <img
              className="navbar__shopcard-control-img"
              src={heartLikeIcon}
              alt="favorites"
            />
            {favoriteItemsNum !== 0 && (
              <div className="navbar__icon-number">
                {favoriteItemsNum}
              </div>
            )}
          </NavLink>
        </li>
        <li className={cn('navbar__shopcard-control-item', {
          'navbar__shopcard-control--item--mobile': isMenuOpen,
        })}
        >
          <NavLink
            className={({ isActive }) => (
              cn('navbar__shopcard-control-link', {
                'navbar__menu-list-link--active': isActive,
                'navbar__menu-list-link--mobile': isMenuOpen,
              })
            )}
            to="card"
            onClick={() => setMenuOpen(false)}
          >
            <img
              className="navbar__shopcard-control-img"
              src={shoppingBagIcon}
              alt="card"
            />
            {cartItemsNum !== 0 && (
              <div className="navbar__icon-number">
                {cartItemsNum}
              </div>
            )}
          </NavLink>
        </li>
      </ul>
      <div className="navbar__menu__btn">
        {!isMenuOpen ? (
          // eslint-disable-next-line react/button-has-type
          <button
            className="navbar__menu__icon"
            onClick={() => setMenuOpen(true)}
          >
            <img
              src={menuIcon}
              alt="menu"
            />
          </button>
        ) : (
          // eslint-disable-next-line react/button-has-type
          <button
            className="navbar__menu__icon"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src={closeMenu}
              alt="closeMenu"
            />
          </button>
        )}
      </div>
    </>
  );
});
