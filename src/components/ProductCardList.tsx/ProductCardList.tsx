import React, { FC } from 'react';
import { Phone } from '../../types/Phone';
import { ProductCard } from '../ProductCard/ProductCard';

type Props = {
  phones: Phone[]
};

export const ProductCardList: FC<Props> = ({ phones }) => {
  return (
    <div>
      {phones.map((phone) => (
        <li key={phone.id}>
          <ProductCard
            name={phone.name}
            image={phone.image}
            fullPrice={phone.fullPrice}
            price={phone.price}
            screen={phone.screen}
            capacity={phone.capacity}
            ram={phone.ram}
          />
        </li>
      ))}
    </div>
  );
};
