import React from 'react';
import { Phone } from '../../types/Phone';
import './ProductCatalog.scss';
import { ProductCard } from '../ProductCard/ProductCard';

type Props = {
  phones: Phone[];
};

export const ProductCatalog: React.FC<Props> = ({ phones }) => (
  <div className="product-catalog">
    {phones.map(phone => (
      <ProductCard
        key={phone.id}
        name={phone.name}
        image={phone.image}
        fullPrice={phone.fullPrice}
        price={phone.price}
        screen={phone.screen}
        capacity={phone.capacity}
        ram={phone.ram}
      />
    ))}
  </div>
);
