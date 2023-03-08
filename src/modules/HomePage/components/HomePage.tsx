import React, { memo } from 'react';
import { Categories } from '../../../components/Categories';
import './HomePage.scss';

export const HomePage: React.FC = memo(() => (
  <section className="home-page">
    <h1 className="home-page__title">Welcome to Nice Gadgets store!</h1>
    <Categories />
  </section>
));
