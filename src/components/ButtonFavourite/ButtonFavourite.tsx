import cn from 'classnames';
import React, { FC } from 'react';

type Props = {
  isInFavorites: boolean,
};

export const ButtonFavourite: FC<Props> = ({ isInFavorites }) => {
  return (
    <button
      type="button"
      aria-label="buttonFavourite"
      className={cn(
        'button-favourite',
        { 'button-favourite': isInFavorites },
      )}
    />
  );
};
