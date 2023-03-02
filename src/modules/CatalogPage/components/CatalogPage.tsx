import React, {
  memo,
  useMemo,
  useState,
} from 'react';
// eslint-disable-next-line max-len
import { ProductCatalog } from '../../../components/ProductCatalog/ProductCatalog';
import phonesFromServer from '../../../public/api/phones.json';
import { Pagination } from './Pagination';
import './CatalogPage.scss';
import { Phone } from '../../../types/Phone';

export const CatalogPage: React.FC = memo(() => {
  const startPage = 1;
  const startSelect = 16;
  const countOfItems = 71;

  const [phones] = useState(phonesFromServer);
  const [currentPage, setCurrentPage] = useState(startPage);
  const [itemsPerPage, setItemsPerPage] = useState(startSelect);
  const [sortBy, setSortBy] = useState('Newest');

  const startItems = currentPage * itemsPerPage - itemsPerPage;
  const endItems = currentPage * itemsPerPage <= countOfItems
    ? currentPage * itemsPerPage
    : countOfItems;
  const visibleItems = phones.slice(startItems, endItems);

  const sortedItems = useMemo(() => {
    return visibleItems.sort((item1: Phone, item2: Phone) => {
      switch (sortBy) {
        case 'Newest':
          return item2.year - item2.year;
        case 'Alphabetically':
          return item1.phoneId.localeCompare(item2.phoneId);
        case 'Cheapest':
          return item1.price - item2.price;
        default:
          return 0;
      }
    });
  }, [sortBy, phones, currentPage, itemsPerPage]);

  return (
    <section className="catalog-page">
      <h1 className="catalog-page__title">Mobile phones</h1>
      <p className="catalog-page__subtitle">{`${countOfItems} models`}</p>
      <div className="catalog">
        <div>
          <label className="catalog-page__label">
            Sort by
            <select
              className=""
              value={sortBy}
              onChange={(event) => {
                setSortBy(event.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="Newest">Newest</option>
              <option value="Alphabetically">Alphabetically</option>
              <option value="Cheapest">Cheapest</option>
            </select>
          </label>
        </div>
        <div>
          <label className="catalog-page__label">
            Items on page
            <select
              className=""
              value={itemsPerPage}
              onChange={(event) => {
                setItemsPerPage(Number(event.target.value));
                setCurrentPage(1);
              }}
            >
              <>
                <option value="4">4</option>
                <option value="8">8</option>
                <option value="16">16</option>
                <option value="95">All</option>
              </>
            </select>
          </label>
        </div>

        <ProductCatalog phones={sortedItems} />
        <Pagination
          total={71}
          perPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
});
