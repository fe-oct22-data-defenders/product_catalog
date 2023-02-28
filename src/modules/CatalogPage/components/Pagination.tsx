import cn from 'classnames';
import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import './Pagination.scss';

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
  const getPageNumber = (start: number, end: number) => {
    const numbers = [];

    for (let i = start; i <= end; i += 1) {
      numbers.push(i);
    }

    return numbers;
  };

  type SearchParams = {
    [key: string]: string | null,
  };

  function searchBy(
    currentParams: URLSearchParams,
    params: SearchParams,
  ): string {
    const newParams = new URLSearchParams(
      currentParams.toString(),
    );

    Object.entries(params).forEach(([key, value]) => {
      if (value === null) {
        newParams.delete(key);
      } else {
        newParams.set(key, value);
      }
    });

    return newParams.toString();
  }

  const numberOfPages = getPageNumber(1, Math.ceil(total / perPage));
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
            search: searchBy(searchParams, { page: `${currentPage - 1}` }),
          }}
          aria-disabled={currentPage === 1}
          onClick={() => {
            if (currentPage !== 1) {
              onPageChange(currentPage - 1);
            }
          }}
        >
          {'<'}
        </Link>
        {/* <button
          type="button"
          className="pagination__button"
          aria-disabled={currentPage === 1}
          disabled={currentPage === 1}
          onClick={() => {
            if (currentPage !== 1) {
              onPageChange('prev');
            }
          }}
        >
          {'<'}
        </button> */}
      </li>
      {numberOfPages.map(page => (
        <li
          key={page}
        >
          <Link
            className="pagination__link"
            to={{
              search: searchBy(searchParams, { page: `${page}` }),
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
            search: searchBy(searchParams, { page: `${currentPage + 1}` }),
          }}
          aria-disabled={currentPage === lastPage}
          onClick={() => {
            if (currentPage !== lastPage) {
              onPageChange(currentPage + 1);
            }
          }}
        >
          {'>'}
        </Link>
        {/* <button
          type="button"
          className="pagination__button"
          aria-disabled={currentPage === lastPage}
          disabled={currentPage === lastPage}
          onClick={() => {
            if (currentPage !== lastPage) {
              onPageChange('next');
            }
          }}
        >
          {'>'}
        </button> */}
      </li>
    </ul>
  );
});
