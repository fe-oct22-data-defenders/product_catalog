import cn from 'classnames';
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

export type Props = {
  to: string;
  text: string;
  // eslint-disable-next-line react/no-unused-prop-types
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
};

export const PageNavLink: FC<Props> = ({ to, text, setMenuOpen }) => (
  <NavLink
    className={({ isActive }) => (
      cn('navbar__menu-list-link', {
        'navbar__menu-list-link--active': isActive,
      })
    )}
    to={to}
    onClick={() => setMenuOpen(false)}
  >
    <div className="navbar__menu-list-link-container">{text}</div>
  </NavLink>
);

export const MenuLink: React.FC<Props> = ({ to, text, setMenuOpen }) => {
  return (
    <NavLink
      onClick={() => setMenuOpen(false)}
      to={to}
      className={({ isActive }) => cn('menu__link', { 'is-active': isActive })}
    >
      {text}
    </NavLink>
  );
};
