import cn from 'classnames';
import React, {
  FC, useCallback, useEffect, useState,
} from 'react';
import { Link } from 'react-router-dom';
import { getOne } from '../../api/phones';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { FullPhone } from '../../types/FullPhone';
import { Phone } from '../../types/Phone';
import { RenderParams } from '../../types/RenderParams';
import { About } from '../About';
import { ButtonAccent } from '../ButtonAccent/ButtonAccent';
import { ButtonFavourite } from '../ButtonFavourite/ButtonFavourite';
import { Colors } from '../Colors';
import { Loader } from '../Loader/Loader';
import { ProductSlider } from '../ProductSlider';
import { SpecDetails } from '../SpecDetails';
import { TechSpecs } from '../TechSpecs';
import './Product.scss';

type Props = {
  productId: string,
};

export const Product: FC<Props> = ({ productId }) => {
  const [cart, favourites, setSomething, removeSomething] = useLocalStorage();
  const [product, setProduct] = useState<FullPhone | null>(null);
  const [shortProduct, setShortProduct] = useState<Phone | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadById = useCallback(async () => {
    const loadedProduct = await getOne(`${productId}`);

    return loadedProduct;
  }, [productId]);

  const fetchData = useCallback(async () => {
    const data = await loadById();

    setProduct(data.longData);
    setShortProduct(data.shortData);

    setIsLoading(false);
  }, [loadById]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, [productId, fetchData]);

  const colors: { [index: string]: string } = {
    midnightgreen: '#5f7170',
    gold: '#fcdbc1',
    rosegold: '#fdddd7',
    silver: '#f0f0f0',
    spacegray: '#4c4c4c',
    black: '#1a1a00',
    green: '#66ffc2',
    yellow: '#ffff80',
    white: '#fff',
    purple: '#ccb3ff',
    red: '#e63900',
    blue: '#425cde',
  };

  const handleAddtoCartClick = (where: string) => {
    if (shortProduct) {
      setSomething(where, { ...shortProduct, counter: 1 });
    }
  };

  function changeCapacity(id: string | undefined, newCapacity: string) {
    if (typeof id !== 'string') {
      return;
    }

    const splittedId = id.split('-');

    for (let i = 0; i < splittedId.length; i += 1) {
      if (splittedId[i].includes('gb')) {
        splittedId[i] = newCapacity.toLowerCase();
      }
    }

    // eslint-disable-next-line consistent-return
    return splittedId.join('-');
  }

  const renderParams = [
    ['Screen', product?.screen],
    ['Resolution', product?.resolution],
    ['Processor', product?.processor],
    ['RAM', product?.ram],
  ] as RenderParams;

  const isInCart = cart.some(el => el.id === shortProduct?.id);
  const isInFavorites = favourites.find(phone => phone.phoneId === productId);

  return (
    <>
      {!isLoading && product && (
        <article className="product">
          <h1 className="product__title">{product?.name}</h1>
          <div className="grid product__main">
            <div
              className="
                product__slider-container
                grid__item
                grid__item--1-4
                grid__item--tablet-1-6
                grid__item--desktop-1-12"
            >
              <ProductSlider
                phoneImages={product.images}
                name={product.name}
              />
            </div>

            <div className="
          product__options
          grid__item
          grid__item--1-4
          grid__item--tablet-8-12
          grid__item--desktop-14-20"
            >
              <Colors
                colorsAvailable={product?.colorsAvailable}
                colors={colors}
                color={product?.color}
                id={product?.id}
              />
              <div className="product__options-capacity">
                <p className="product__options-capacity-title">
                  Select capacity
                </p>

                <div className="product__options-capacity-buttons">
                  {product?.capacityAvailable.map((cap) => {
                    const isCurrCapacity = cap === product?.capacity;

                    return (
                      <Link
                        key={cap}
                        to={`/phones/${changeCapacity(product?.id, cap)}`}
                        className={cn({
                          capacityBtn: true,
                          capacityBtn__active: isCurrCapacity,
                        })}
                      >
                        {cap}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="product__options-order">
                <div className="product__options-order-price">
                  <p className="product__options-order-price--new">
                    {`$${product?.priceDiscount}`}
                  </p>
                  <p className="product__options-order-price--old">
                    {`$${product?.priceRegular}`}
                  </p>
                </div>
                <div className="phone__buttons">
                  {isInCart && shortProduct
                    ? (
                      <ButtonAccent
                        classNameButton="button-accent button-accent--added"
                        text="Added to cart"
                        onClick={() => (
                          removeSomething('phones', shortProduct.id, true)
                        )}
                      />
                    ) : (
                      <ButtonAccent
                        classNameButton="button-accent"
                        text="Add to card"
                        onClick={() => handleAddtoCartClick('phones')}
                      />
                    )}
                  {shortProduct && (
                    <ButtonFavourite
                      phone={shortProduct}
                      isInFavorites={Boolean(isInFavorites)}
                    />
                  )}
                </div>
              </div>
              <SpecDetails renderParams={renderParams} />
            </div>
          </div>

          <div className="grid">
            <div className="grid__item
              grid__item--1-4
              grid__item--tablet-1-12
              grid__item--desktop-1-12"
            >
              <About description={product?.description} />
            </div>
            <div className="
              grid__item
              grid__item--1-4
              grid__item--tablet-1-12
              grid__item--desktop-14-24"
            >
              <TechSpecs product={product} />
            </div>
          </div>
        </article>
      )}

      {isLoading && <Loader />}
    </>
  );
};
