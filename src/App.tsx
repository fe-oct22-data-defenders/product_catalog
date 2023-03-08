import { Navigate, Route, Routes } from 'react-router-dom';
import React, { FC } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CatalogPage } from './modules/CatalogPage/components/CatalogPage';
import { NotFoundPage } from './modules/NotFoundPage';
import { HomePage } from './modules/HomePage/components/HomePage';
import { FavouritesPage } from './modules/FavouritesPage';
import { CartPage } from './modules/CartPage/components/CartPage';
import './App.scss';

export const App: FC = () => {
  return (
    <div className="app">
      <Header />
      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="phones" element={<CatalogPage />}>
              <Route path=":phoneId" element={<h1>Item card</h1>} />
            </Route>
            <Route path="tablets" element={<h1>Tablets</h1>} />
            <Route path="accessories" element={<h1>Accessories</h1>} />
            <Route path="favorites" element={<FavouritesPage />} />
            <Route path="card" element={<CartPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};
