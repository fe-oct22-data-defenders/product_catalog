import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from '../../types/Phone';

type Props = {
  phone: Phone;
};

export const Card: React.FC<Props> = ({ phone }) => {
  return (
    <article className="card" data-qa="card">
      <img
        className="card__image"
        src={phone.image}
        alt="APPLE"
      />

      <h3 className="card__title">
        {phone.name}
      </h3>

      <div className="card__price">
        <p className="card__price-discount">{phone.price}</p>

        <p className="card__price-full">{phone.fullPrice}</p>
      </div>

      <p className="card__subtitle">
        Screen 195434
      </p>
      <p className="card__subtitle">
        Capacity 195434
      </p>
      <p className="card__subtitle">
        RAM 195434
      </p>

      <Link
        className="card__link"
        to="/"
      >
        Buy
      </Link>
    </article>
  );
};
