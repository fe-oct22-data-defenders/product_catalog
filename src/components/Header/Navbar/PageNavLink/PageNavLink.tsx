import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

export type Props = {
  to: string;
  text: string;
};

export const PageNavLink: FC<Props> = ({ to, text }) => (
  <NavLink
    className=""
    to={to}
  >
    {text}
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
