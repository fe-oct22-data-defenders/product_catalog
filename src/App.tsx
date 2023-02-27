import {
  Navigate, Route, Routes,
} from 'react-router-dom';
import { FC } from 'react';
import { Navbar } from './modules/HomePage/components/Heder/Navbar/Navbar';
import { Logo } from './modules/HomePage/components/Heder/Logo/Logo';

export const App: FC = () => {
  return (
    <>
      <Logo />
      <Navbar />
      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<h1>Home page</h1>} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route
              path="phones"
              element={
                <h1>Phones</h1>
              }
            >
              <Route
                path=":phoneId"
                element={<h1>Phone1</h1>}
              />
            </Route>
            <Route
              path="tablets"
              element={
                <h1>Tablets</h1>
              }
            />
            <Route
              path="accessories"
              element={
                <h1>Accessories</h1>
              }
            />

            <Route
              path="*"
              element={<h1>Page not found</h1>}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};
