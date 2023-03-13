import cn from 'classnames';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ColorsType } from '../../types/Colors';

type Props = {
  colorsAvailable: string[],
  colors: ColorsType,
  color: string,
  id: string,
};

export const Colors: FC<Props> = ({
  colorsAvailable,
  colors,
  color,
  id,
}) => {
  function changeColor(productId: string, newColor: string) {
    const splittedId = productId.split('-');

    for (let i = 0; i < splittedId.length; i += 1) {
      if (colors[splittedId[i]]) {
        splittedId[i] = newColor;
      }
    }

    return splittedId.join('-');
  }

  return (
    <>
      <div className="product__options-title">
        <h5 className="product__options-title-available">
          Available colors
        </h5>

        <p className="product__options-title-id">
          ID: 802390
        </p>
      </div>

      <div className="product__options-colors">
        {colorsAvailable.map((col) => {
          const hexBGColor = colors[col];
          const isCurrColor = col === color;

          return (
            <Link
              key={col}
              to={`/phones/${changeColor(id, col)}`}
              className={cn({
                colorBtn: true,
                colorBtn__active: isCurrColor,
              })}
            >
              <div
                className="colorBtn__background"
                style={{ backgroundColor: hexBGColor }}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};
