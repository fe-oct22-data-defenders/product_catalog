import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../../public/img/pag/Home.svg';
import arrow from '../../public/img/pag/arrow.svg';
import './HomeButton.scss';

type Props = {
  text: string,
};

export const HomeButton: React.FC<Props> = ({ text }) => {
  return (
    <div className="home-button">
      <Link className="home-button__link" to="/">
        <img className="home-button__img" src={homeIcon} alt="home icon" />
      </Link>
      <img className="home-button__arrow" src={arrow} alt="home icon" />
      <p className="home-button__text">
        {text}
      </p>
    </div>
  );
};
