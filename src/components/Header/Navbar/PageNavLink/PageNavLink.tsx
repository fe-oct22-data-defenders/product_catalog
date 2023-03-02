import cn from 'classnames';
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

export type Props = {
  to: string;
  text: string;
};

export const PageNavLink: FC<Props> = ({ to, text }) => (
  <NavLink
    className={({ isActive }) => (
      cn('navbar__menu-list-link', {
        'navbar__menu-list-link--active': isActive,
      })
    )}
    to={to}
  >
    <div className="navbar__menu-list-link-container">{text}</div>
  </NavLink>
);

export const NavbarMenuLink: React.FC<Props> = ({ to, text }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => cn('menu__link', { 'is-active': isActive })}
    >
      {text}
    </NavLink>
  );
};
