import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';

export const Logo: FC = memo(() => {
  return (
    <Link to="/"><img src="" alt="Shop Logo" /></Link>
  );
});
