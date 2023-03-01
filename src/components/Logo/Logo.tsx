import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/header-icons/logo.svg';

export const Logo: FC = memo(() => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="logoIcon" />
      </Link>
    </div>
  );
});
