import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../../public/img/pag/Home.svg';
import arrow from '../../public/img/pag/arrow.svg';
import './HomeButtonPlus.scss';

type Props = {
  category: string,
  itemName: string,
};

export const HomeButtonPlus: React.FC<Props> = ({ category, itemName }) => {
  return (
    <div className="home-button">
      <Link className="home-button__link" to="/">
        <img className="home-button__img" src={homeIcon} alt="home icon" />
      </Link>
      <img className="home-button__arrow" src={arrow} alt="home icon" />
      <Link to={`/${category}`} className="home-button__category">
        {category}
      </Link>
      <img className="home-button__arrow" src={arrow} alt="home icon" />
      <p className="home-button__text">
        {itemName}
      </p>
    </div>
  );
};
