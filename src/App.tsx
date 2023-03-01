import { Navigate, Route, Routes } from 'react-router-dom';
import React, { FC } from 'react';
import { Header } from './components/Header';
import phonesFromServer from './public/api/phones.json';
// eslint-disable-next-line max-len
import { ProductCardList } from './components/ProductCardList.tsx/ProductCardList';

export const App: FC = () => {
  return (
    <>
      <Header />
      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<h1>Home page</h1>} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="phones" element={<h1>Phones(Catalog)</h1>}>
              <Route path=":phoneId" element={<h1>Item card</h1>} />
            </Route>
            <Route path="tablets" element={<h1>Tablets</h1>} />
            <Route path="accessories" element={<h1>Accessories</h1>} />
            <Route path="favorites" element={<h1>Favorites</h1>} />
            <Route path="card" element={<h1>CardPage</h1>} />

            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
          <ProductCardList phones={phonesFromServer} />
        </div>
      </div>
    </>
  );
};
