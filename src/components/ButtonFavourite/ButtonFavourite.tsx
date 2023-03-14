import cn from 'classnames';
import React, { FC } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Phone } from '../../types/Phone';

type Props = {
  phone: Phone | undefined,
  isInFavorites: boolean,
};

export const ButtonFavourite: FC<Props> = ({
  isInFavorites,
  phone,
}) => {
  const [, , addToLocalStorage, removeFromLocalStorage] = useLocalStorage();

  return (
    <button
      type="button"
      aria-label="buttonFavourite"
      className={cn(
        'button-favourite',
        { 'button-favourite--added': isInFavorites },
      )}
      onClick={(event) => {
        event.preventDefault();

        if (isInFavorites) {
          removeFromLocalStorage('favorites', phone?.id, true);
        } else {
          addToLocalStorage('favorites', phone);
        }
      }}
    />
  );
};
