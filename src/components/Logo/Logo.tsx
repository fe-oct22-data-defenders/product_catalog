import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon } from '../SVG';

export const Logo: FC = memo(() => {
  return (
    <div className="logo">
      <Link to="/"><LogoIcon /></Link>
    </div>
  );
});
