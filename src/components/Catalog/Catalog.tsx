import React from 'react';
import { Card } from '../Card/Card';
import { Phone } from '../../types/Phone';

type Props = {
  phones: Phone[];
};

export const Catalog: React.FC<Props> = ({ phones }) => (
  <>
    {phones.map(phone => <Card phone={phone} key={phone.id} />)}
  </>
);
