import React, { memo } from 'react';
import { HomeButton } from '../../components/HomeButton';
// eslint-disable-next-line max-len
import { ProductCatalog } from '../../components/ProductCatalog/ProductCatalog';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import './FavouritesPage.scss';

export const FavouritesPage: React.FC = memo(() => {
  const [, favorites] = useLocalStorage();

  return (
    <section className="favourites-page">
      <div className="favourites-page__homebutton-wrapper">
        <HomeButton text="Favourites" />
      </div>
      <h1 className="favourites-page__title">Favourites</h1>
      {favorites.length !== 0 && (
        <>
          <p className="favourites-page__subtitle">{`${favorites.length} models`}</p>
          <div className="catalog">
            <ProductCatalog phones={favorites} />
          </div>
        </>
      )}

      {favorites.length === 0 && (
        <p className="favourites-page__no-items">
          You do not have any favourite product yet
        </p>
      )}
    </section>
  );
});
