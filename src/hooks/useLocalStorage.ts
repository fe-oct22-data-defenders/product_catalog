/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/indent */
import { useEffect, useState } from 'react';
import { Phone } from '../types/Phone';

export type AddFunction = (key: string, value: Phone | undefined) => void;
export type RemoveFunction = (
  key: string,
  removingElId: string | undefined,
  clearCompletely: boolean,
) => void;
type HookOutput = [Phone[], Phone[], AddFunction, RemoveFunction];
type FunctionUseLocaleStorage = () => HookOutput;

export const useLocalStorage: FunctionUseLocaleStorage = () => {
  const cartJSON = localStorage.getItem('phones') || '[]';
  const favoritesJSON = localStorage.getItem('favorites') || '[]';

  const [cart, setCart] = useState(JSON.parse(cartJSON));
  const [favorites, setFavorites] = useState(JSON.parse(favoritesJSON));

  const [channel] = useState(new BroadcastChannel('my_channel'));

  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === 'phones') {
        setCart(JSON.parse(event.newValue || '[]'));
      }

      if (event.key === 'favorites') {
        setFavorites(JSON.parse(event.newValue || '[]'));
      }
    };

    window.addEventListener('storage', handleStorage);
    channel.onmessage = (event: MessageEvent) => {
      if (event.data.key === 'phones') {
        setCart(event.data.body);
      }

      if (event.data.key === 'favorites') {
        setFavorites(event.data.body);
      }
    };

    return () => {
      window.removeEventListener('storage', handleStorage);
      channel.close();
    };
  }, []);

  // eslint-disable-next-line consistent-return
  function addToLocalStorage(key: string, value: Phone | undefined): void {
    const stringStorage = localStorage.getItem(key);

    const storage = stringStorage ? JSON.parse(stringStorage) : [];

    const exsistingProduct = storage.find(
      (el: { id: string }) => el.id === value?.id,
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
    event.newValue = JSON.stringify(storage);
    window.dispatchEvent(event);

    const message = { key, body: storage };

    channel.postMessage(message);
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
      event.newValue = JSON.stringify([]);
      window.dispatchEvent(event);

      const message = { key, body: [] };

      channel.postMessage(message);

      if (clearCompletely) {
        if (key === 'phones') {
          setCart([]);
        } else {
          setFavorites([]);
        }
      }

      return;
    }

    if (clearCompletely === false) {
      storage = storage
        .map((el: { id: string; counter: number }) => (
          el.id === removingElId && el.counter > 1
            ? { ...el, counter: el.counter - 1 }
            : el));
    } else {
      storage = storage.filter(
        (el: { id: string }) => el.id !== removingElId,
      );
    }

    localStorage.setItem(key, JSON.stringify(storage));

    const event: any = new Event('storage');

    event.key = key;
    event.newValue = JSON.stringify(storage);
    window.dispatchEvent(event);

    const message = { key, body: storage };

    channel.postMessage(message);

    if (key === 'phones') {
      setCart(storage);
    } else {
      setFavorites(storage);
    }
  }

  return [cart, favorites, addToLocalStorage, removeFromLocalStorage];
};
