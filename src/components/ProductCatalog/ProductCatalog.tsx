import React from 'react';
import { Card } from '../Card/Card';
import { Phone } from '../../types/Phone';
import './ProductCatalog.scss';

type Props = {
  phones: Phone[];
};

export const ProductCatalog: React.FC<Props> = ({ phones }) => (
  <div className="product-catalog">
    {phones.map(phone => <Card text={phone.id} key={phone.id} />)}
  </div>
);
