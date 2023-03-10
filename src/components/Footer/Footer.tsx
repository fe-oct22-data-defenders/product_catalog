/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Logo } from '../Logo/Logo';
import './Footer.scss';

const backToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__logo">
        <div className="footer__logo__link">
          <Logo />
        </div>
      </div>

      <ul className="footer__nav">
        <li className="footer__nav__item">
          <a
            className="footer__nav__link"
            href="https://github.com/fe-oct22-data-defenders/product_catalog"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
        </li>

        <li className="footer__nav__item">
          <a
            className="footer__nav__link"
            href="https://github.com/fe-oct22-data-defenders/product_catalog"
            target="_blank"
            rel="noreferrer"
          >
            contacts
          </a>
        </li>

        <li className="footer__nav__item">
          <a
            className="footer__nav__link"
            href="https://github.com/fe-oct22-data-defenders/product_catalog"
            target="_blank"
            rel="noreferrer"
          >
            rights
          </a>
        </li>
      </ul>

      <div className="footer__back">
        <div className="footer__text">Back to top</div>

        <button
          type="button"
          onClick={backToTop}
          className="footer__button"
        />
      </div>
    </div>
  </footer>
);
