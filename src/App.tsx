import { Navigate, Route, Routes } from 'react-router-dom';
import React, { FC } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CatalogPage } from './modules/CatalogPage/components/CatalogPage';
import { NotFoundPage } from './modules/NotFoundPage';
import { HomePage } from './modules/HomePage/HomePage';
import { FavouritesPage } from './modules/FavouritesPage';
import { CartPage } from './modules/CartPage/components/CartPage';
import { ProductPage } from './modules/ProductPage';
import './App.scss';

export const App: FC = () => {
  return (
    <div className="app">
      <Header />
      <div className="section">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="phones">
            <Route index element={<CatalogPage />} />
            <Route path=":productId" element={<ProductPage />} />
          </Route>
          <Route path="tablets" element={<NotFoundPage />} />
          <Route path="accessories" element={<NotFoundPage />} />
          <Route path="favorites" element={<FavouritesPage />} />
          <Route path="card" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
