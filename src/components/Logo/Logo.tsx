import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/header-icons/logo.svg';
import './Logo.scss';

export const Logo: FC = memo(() => {
  return (
    <div className="logo">
      <Link to="/">
        <img className="logo__img" src={logo} alt="logoIcon" />
      </Link>
    </div>
  );
});
