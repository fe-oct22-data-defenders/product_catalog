// eslint-disable-next-line import/no-extraneous-dependencies
import cn from 'classnames';
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

export type Props = {
  to: string;
  text: string;
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
