<<<<<<< HEAD
import { Navigate, Route, Routes } from 'react-router-dom';
import React, { FC } from 'react';
<<<<<<< HEAD
import { Header } from './components/Header/Header';
import { CatalogPage } from './modules/CatalogPage/components/CatalogPage';
import { NotFoundPage } from './modules/NotFoundPage';
import { HomePage } from './modules/HomePage/components/HomePage';
=======
import { Header } from './components/Header';
import { Footer } from './components/Footer';
>>>>>>> 42a0cc5 (fixed adaptability)

export const App: FC = () => {
  return (
    <>
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
            <Route path="favorites" element={<h1>Favorites</h1>} />
            <Route path="card" element={<h1>CardPage</h1>} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
=======
import './App.scss';
import { Footer } from './components/Footer/Footer';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Footer />
    </div>
>>>>>>> b4731b4 (initial footer)
  );
};
