import cn from 'classnames';
import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import './Pagination.scss';
import { getNumbers } from './helpers/getNumbers';
import { searchByPage } from './helpers/searchByPage';

type Props = {
  total: number,
  perPage: number,
  currentPage: number,
  onPageChange: (page: number | string) => void
};

export const Pagination: React.FC<Props> = React.memo(({
  total,
  perPage,
  currentPage,
  onPageChange,
}) => {
  const [searchParams] = useSearchParams();

  const numberOfPages = getNumbers(1, Math.ceil(total / perPage));
  const lastPage = Math.ceil(total / perPage);

  return (
    <ul className="pagination">
      <li>
        <Link
          className={cn(
            'pagination__button',
            { pagination__button__disabled: currentPage === 1 },
          )}
          to={{
            search: searchByPage(searchParams, { page: `${currentPage - 1}` }),
          }}
          onClick={() => {
            if (currentPage !== 1) {
              onPageChange(currentPage - 1);
            }
          }}
        >
          {'<'}
        </Link>
      </li>
      {numberOfPages.map(page => (
        <li
          key={page}
        >
          <Link
            className={cn(
              'pagination__link',
              { pagination__link__active: currentPage === page },
            )}
            to={{
              search: searchByPage(searchParams, { page: `${page}` }),
            }}
            onClick={() => onPageChange(page)}
          >
            {page}
          </Link>
        </li>
      ))}
      <li>
        <Link
          className={cn(
            'pagination__button',
            { pagination__button__disabled: currentPage === lastPage },
          )}
          to={{
            search: searchByPage(searchParams, { page: `${currentPage + 1}` }),
          }}
          onClick={() => {
            if (currentPage !== lastPage) {
              onPageChange(currentPage + 1);
            }
          }}
        >
          {'>'}
        </Link>
      </li>
    </ul>
  );
});
