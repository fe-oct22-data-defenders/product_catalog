import React from 'react';
import phones from '../../public/img/ShopBy/Phones.jpg';
import tablets from '../../public/img/ShopBy/Tablets.jpg';
import accessories from '../../public/img/ShopBy/Accessories.jpg';
import { CategoryItem } from '../CategoryItem';
import './Categories.scss';

export const Categories: React.FC = () => {
  return (
    <div className="categories">
      <h2 className="categories__title">
        Shop by category
      </h2>
      <div className="grid">
        <div className="
          categories__item
          grid__item--1-4
          grid__item--tablet-1-4
          grid__item--desktop-1-8"
        >
          <CategoryItem
            categoryImg={phones}
            categoryImgAlt="Phones"
            categoryLink="/phones"
            categoryTitle="Phones"
            categoryTotal="71 models"
          />
        </div>

        <div className="
          categories__item
          grid__item--1-4
          grid__item--tablet-5-8
          grid__item--desktop-9-16"
        >
          <CategoryItem
            categoryImg={tablets}
            categoryImgAlt="Tablets"
            categoryLink="/tablets"
            categoryTitle="Tablets"
            categoryTotal="100 models"
          />
        </div>

        <div className="
          categories__item
          grid__item--1-4
          grid__item--tablet-9-12
          grid__item--desktop-17-24"
        >
          <CategoryItem
            categoryImg={accessories}
            categoryImgAlt="Accessories"
            categoryLink="/accessories"
            categoryTitle="Accessories"
            categoryTotal="100 models"
          />
        </div>
      </div>
    </div>
  );
};
