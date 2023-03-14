/* eslint-disable @typescript-eslint/indent */
import React, {
  FC,
  memo,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useParams } from 'react-router-dom';
import { ButtonBack } from '../../components/ButtonBack/ButtonBack';
import { HomeButtonPlus } from '../../components/HomeButtonPlus';
import './ProductPage.scss';
import { SecondSlider } from '../../components/SecondSlider';
import { getNewestPhones } from '../../api/phones';
import { Phone } from '../../types/Phone';
import { Loader } from '../../components/Loader/Loader';
import { Product } from '../../components/Product';

type Props = {
  rootPath: string;
};

export const ProductPage: FC<Props> = memo(({ rootPath }) => {
  const { productId } = useParams<{ productId: string }>();
  const [newestPhones, setNewestPhones] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const categoryName = rootPath.charAt(0).toUpperCase() + rootPath.slice(1);
  let itemName: string;

  switch (categoryName) {
  case 'Tablets':
    itemName = 'Ipad';
    break;

  default:
    itemName = 'Iphone';
    break;
  }

  const loadNewest = useCallback(async () => {
    const newest = await getNewestPhones();

    return newest;
  }, [productId]);

  useEffect(() => {
    async function fetchNewest() {
      const newest = await loadNewest();

      setNewestPhones(newest.data);

      setIsLoading(false);
    }

    fetchNewest();
  }, [loadNewest]);

  return (
    <div className="container">
      {!isLoading && productId && (
        <section className="product-page">
          <div className="button-home">
            <HomeButtonPlus category={categoryName} itemName={itemName} />
          </div>
          <div className="back-button">
            <ButtonBack />
          </div>
          <Product productId={productId} rootPath={rootPath} />
          <div className="page-wrapper">
            <SecondSlider
              phones={newestPhones}
              text="You may also like"
              sliderClass="phone-recommend"
            />
          </div>
        </section>
      )}

      {isLoading && <Loader />}
    </div>
  );
});
