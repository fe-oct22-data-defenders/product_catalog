/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/indent */
import { useEffect, useState } from 'react';
import { Phone } from '../types/Phone';

type AddFunction = (key: string, value: Phone) => void;
type RemoveFunction = (
  key: string,
  removingElId: string,
  clearCompletely: boolean,
) => void;
type HookOutput = [Phone[], Phone[], AddFunction, RemoveFunction];
type FunctionUseLocaleStorage = () => HookOutput;

export const useLocalStorage: FunctionUseLocaleStorage = () => {
  const cartJSON = localStorage.getItem('phones') || '[]';
  const favoritesJSON = localStorage.getItem('favorites') || '[]';

  const [cart, setCart] = useState(JSON.parse(cartJSON));
  const [favorites, setFavorites] = useState(JSON.parse(favoritesJSON));

  useEffect(() => {
    const handleStorage = (event: any) => {
      if (event.key === 'phones') {
        setCart(event.body);
      }

      if (event.key === 'favorites') {
        setFavorites(event.body);
      }
    };

    window.addEventListener('storage', handleStorage);

    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  // eslint-disable-next-line consistent-return
  function addToLocalStorage(key: string, value: Phone): void {
    const stringStorage = localStorage.getItem(key);

    const storage = stringStorage ? JSON.parse(stringStorage) : [];

    const exsistingProduct = storage.find(
      (el: { id: string }) => el.id === value.id,
    );

    switch (key) {
    case 'phones':
      if (exsistingProduct) {
        exsistingProduct.counter += 1;
      } else {
        storage.push(value);
      }

      break;

    default:
      if (exsistingProduct) {
        return undefined;
      }

      storage.push(value);

      break;
    }

    localStorage.setItem(key, JSON.stringify(storage));

    const event: any = new Event('storage');

    event.key = key;
    event.body = storage;

    window.dispatchEvent(event);
  }

  function removeFromLocalStorage(
    key: string,
    removingElId: string | undefined,
    clearCompletely = false,
  ) {
    const stringStorage = localStorage.getItem(key);

    let storage = stringStorage ? JSON.parse(stringStorage) : [];

    if (!removingElId) {
      localStorage.setItem(key, '[]');

      const event: any = new Event('storage');

      event.key = key;
      event.body = storage;

      window.dispatchEvent(event);

      return;
    }

    const exsistingProduct = storage.find(
      (el: { id: string }) => el.id === removingElId,
    );

    if (!exsistingProduct) {
      return;
    }

    if (clearCompletely) {
      storage = storage.filter((el: { id: string }) => el.id !== removingElId);
    }

    switch (key) {
    case 'phones':
      if (exsistingProduct.counter > 1) {
        exsistingProduct.counter -= 1;
      } else {
        storage = storage.filter(
          (el: { id: string }) => el.id !== removingElId,
        );
      }

      break;

    default:
      storage = storage.filter(
        (el: { id: string }) => el.id !== removingElId,
      );

      break;
    }

    localStorage.setItem(key, JSON.stringify(storage));

    const event: any = new Event('storage');

    event.key = key;
    event.body = storage;

    window.dispatchEvent(event);
  }

  return [cart, favorites, addToLocalStorage, removeFromLocalStorage];
};
