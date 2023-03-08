import React, { memo, useState } from 'react';
// eslint-disable-next-line max-len
import { ProductCatalog } from '../../components/ProductCatalog/ProductCatalog';
import phonesFromServer from '../../public/api/phones.json';
import './FavouritesPage.scss';

export const FavouritesPage: React.FC = memo(() => {
  const [phones] = useState(phonesFromServer);

  return (
    <section className="favourites-page">
      <h1 className="favourites-page__title">Favourites</h1>
      <p className="favourites-page__subtitle">{`${phones.length} models`}</p>
      <div className="catalog">
        <ProductCatalog phones={phones} />
      </div>
    </section>
  );
});
