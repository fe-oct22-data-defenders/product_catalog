import React, { memo } from 'react';
import './NotFoundPage.scss';

export const NotFoundPage: React.FC = memo(() => {
  return (
    <h1 className="not-found__title">Page not found</h1>
  );
});
