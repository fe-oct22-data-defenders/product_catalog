import React from 'react';
import { Phone } from '../../types/Phone';
import './ProductCatalog.scss';
import { ProductCard } from '../ProductCard/ProductCard';
import { useLocalStorage } from '../../hooks/useLocalStorage';

type Props = {
  phones: Phone[];
  rootPath: string,
};

export const ProductCatalog: React.FC<Props> = ({
  phones,
  rootPath,
}) => {
  const [cart, favorites] = useLocalStorage();

  return (
    <div className="product-catalog">
      {phones.map(phone => {
        const isInCart = Boolean(cart.find((el) => el.id === phone.id));
        const isInFavorites = Boolean(
          favorites.find((el) => el.id === phone.id),
        );

        return (
          <ProductCard
            phone={phone}
            isInCart={isInCart}
            isInFavorites={isInFavorites}
            key={phone.name}
            rootPath={rootPath}
          />
        );
      })}
    </div>
  );
};
