import cn from 'classnames';
import React, { FC } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Phone } from '../../types/Phone';

type Props = {
  phone: Phone
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
      onClick={isInFavorites
        ? () => removeFromLocalStorage('favorites', phone.id, true)
        : () => addToLocalStorage('favorites', phone)}
    />
  );
};
