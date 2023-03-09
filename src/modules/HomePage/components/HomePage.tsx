import React, { memo, useEffect, useState } from 'react';
import { getCheapestPhones, getNewestPhones } from '../../../api/phones';
import { Categories } from '../../../components/Categories';
import { SecondSlider } from '../../../components/SecondSlider';
import { Phone } from '../../../types/Phone';
import './HomePage.scss';

export const HomePage: React.FC = memo(() => {
  const [newestPhones, setNewestPhones] = useState<Phone[]>([]);
  const [hotPricesPhones, setHotPricesPhones] = useState<Phone[]>([]);

  const loadGoods = async () => {
    try {
      const newest = await getNewestPhones();
      const cheapest = await getCheapestPhones();

      setNewestPhones(newest.data);
      setHotPricesPhones(cheapest.data);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  useEffect(() => {
    loadGoods();
  }, []);

  return (
    <section className="home-page">
      <h1 className="home-page__title">Welcome to Nice Gadgets store!</h1>
      <Categories />
      <SecondSlider phones={newestPhones} text="Brand new models" />
      <SecondSlider phones={hotPricesPhones} text="Hot prices" />
    </section>
  );
});
