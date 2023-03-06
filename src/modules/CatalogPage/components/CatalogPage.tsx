/* eslint-disable indent */
import React, {
  memo,
  useEffect,
  useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';
// eslint-disable-next-line max-len
import { ProductCatalog } from '../../../components/ProductCatalog/ProductCatalog';
import { Pagination } from './Pagination';
import './CatalogPage.scss';
import { Phone } from '../../../types/Phone';
import { getPhones } from '../../../api/phones';
import { Loader } from '../../../components/Loader/Loader';

export const CatalogPage: React.FC = memo(() => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstLoading, setIsFirstLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const perPage = Number(searchParams.get('perPage')) || 16;
  const currentPage = Number(searchParams.get('page')) || 1;
  const sortBy = String(searchParams.get('sortBy')) || 'newest';

  const loadGoods = async () => {
    setIsLoading(true);

    try {
      const goods = await getPhones(currentPage, perPage, sortBy);

      setPhones(goods.data);
      setTotal(goods.total);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadGoods();
  }, [currentPage, perPage, sortBy]);

  useEffect(() => {
    setTimeout(() => {
      setIsFirstLoading(false);
    }, 500);
  }, []);

  return (
    <section className="catalog-page">
      {isFirstLoading ? (
        <Loader />
      ) : (
        <>
          <h1 className="catalog-page__title">Mobile phones</h1>
          <p className="catalog-page__subtitle">{`${total} models`}</p>
          <div className="catalog">
            <div className="grid catalog-selectors">
              <div className="
              grid__item
              grid__item--1-2
              grid__item--tablet-1-4"
              >
                <div className="catalog-selectors-label ">Sort by</div>
                <div className="wrapper">
                  <select
                    className="catalog-selectors-sort grid__item grid__item--1-2
              grid__item--tablet-1-4"
                    value={sortBy}
                  // onChange={(event) => {
                  //   setSortBy(event.target.value);
                  //   setCurrentPage(1);
                  // }}
                  >
                    <option value="Newest">Newest</option>
                    <option value="Alphabetically">Alphabetically</option>
                    <option value="Cheapest">Cheapest</option>
                  </select>
                </div>
              </div>
              <div className="
            grid__item
            grid__item--3-4
            grid__item--tablet-5-7
            grid__item--desktop-5-7"
              >
                <div className="catalog-selectors-label">Items on page</div>
                <div className="wrapper">
                  <select
                    className="
                catalog-selectors-perpage
                grid__item--3-4
                grid__item--tablet-5-7
                grid__item--desktop-5-7"
                    value={perPage}
                  // onChange={(event) => {
                  //   setItemsPerPage(Number(event.target.value));
                  //   setCurrentPage(1);
                  // }}
                  >
                    <>
                      <option value="4">4</option>
                      <option value="8">8</option>
                      <option value="16">16</option>
                      <option value="71">All</option>
                    </>
                  </select>
                </div>
              </div>
            </div>
            {isLoading && !isFirstLoading
              ? (
                <Loader />)
              : (
                <ProductCatalog phones={phones} />
              )}
            <Pagination
              total={total}
              perPage={perPage}
              currentPage={currentPage}
            />
          </div>
        </>
      )}
    </section>
  );
});
