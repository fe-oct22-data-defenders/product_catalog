import React, { memo, useCallback, useState } from 'react';
import { Catalog } from '../../../components/Catalog/Catalog';
import phonesFromServer from '../../../public/api/phones.json';
import { Pagination } from './Pagination';
// import './CatalogPage.module.scss';

export const CatalogPage: React.FC = memo(() => {
  const startPage = 1;
  const startSelect = 16;
  const countOfItems = 71;

  const [page, setPage] = useState(startPage);
  const [select, setSelect] = useState(startSelect);
  const [phones] = useState(phonesFromServer);

  const startItems = page * select - select;

  const endItems = page * select <= countOfItems
    ? page * select
    : countOfItems;

  const visibleItems = phones.slice(startItems, endItems);

  const handlePageChange = useCallback((currentPage: number | string) => {
    if (typeof currentPage === 'number') {
      setPage(currentPage);
    }

    // if (currentPage === 'prev') {
    //   setPage(prev => prev - 1);
    // }

    // if (currentPage === 'next') {
    //   setPage(prev => prev + 1);
    // }
  }, []);

  return (
    <div className="container">
      <h1>Mobile phones</h1>
      <div className="catalog">
        <div>
          {/* <label>
            Sort by
            <select
              data-cy="perPageSelector"
              id="perPageSelector"
              className="form-control"
              value={select}
              onChange={(event) => {
                setSelect(Number(event.target.value));
                setPage(1);
              }}
            >
              <option value="Newest">Newest</option>
              <option value="Alphabetically">Alphabetically</option>
              <option value="Cheapest">Cheapest</option>
            </select>
          </label> */}
        </div>
        <div>
          <label>
            Items on page
            <select
              data-cy="perPageSelector"
              id="perPageSelector"
              className="form-control"
              value={select}
              onChange={(event) => {
                setSelect(Number(event.target.value));
                setPage(1);
              }}
            >
              <option value="4">4</option>
              <option value="8">8</option>
              <option value="16">16</option>
              <option value="95">All</option>
            </select>
          </label>
        </div>

        <Catalog phones={visibleItems} />
        <Pagination
          total={71}
          perPage={select}
          currentPage={page}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
});
