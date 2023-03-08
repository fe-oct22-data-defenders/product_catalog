import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './CategoryItem.scss';

type Props = {
  categoryImg: string,
  categoryImgAlt: string,
  categoryLink: string,
  categoryTitle: string,
  categoryTotal: string,
};

export const CategoryItem: React.FC<Props> = ({
  categoryImg,
  categoryImgAlt,
  categoryLink,
  categoryTitle,
  categoryTotal,
}) => {
  return (
    <div className="category">
      <Link to={categoryLink}>
        <img
          src={categoryImg}
          alt={categoryImgAlt}
          className="category__img"
        />
      </Link>

      <h4 className="category__title">
        <NavLink
          to={categoryLink}
          className="category__link"
        >
          {categoryTitle}
        </NavLink>
      </h4>

      <p className="category__desc">
        {categoryTotal}
      </p>
    </div>
  );
};
