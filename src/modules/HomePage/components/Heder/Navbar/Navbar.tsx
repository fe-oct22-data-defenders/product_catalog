import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { PageNavLink } from './PageNavLink/PageNavLink';

export const Navbar: FC = memo(() => {
  return (
    <nav
      className="navbar"
    >
      <div className="container">
        <div className="navbar-brand">
          <PageNavLink to="/" text="Home" />
          <PageNavLink to="phones" text="Phones" />
          <PageNavLink to="tablets" text="Tablets" />
          <PageNavLink to="accessories" text="Accessories" />
        </div>
        <div>
          <Link to="favorites"><img src="" alt="Heard" /></Link>
          <Link to="card"><img src="" alt="Іhopping cart" /></Link>
        </div>
      </div>
    </nav>
  );
});

export {};
