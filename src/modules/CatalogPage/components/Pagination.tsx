import cn from 'classnames';
import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import './Pagination.scss';
import { getPages } from './helpers/getPages';
import { searchByPage } from './helpers/searchByPage';

type Props = {
  total: number,
  perPage: number,
  currentPage: number,
};

export const Pagination: React.FC<Props> = React.memo(({
  total,
  perPage,
  currentPage,
}) => {
  const [searchParams] = useSearchParams();

  const firstPage = 1;
  const lastPage = Math.ceil(total / perPage);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === lastPage;
  const maxVisiblePages = 4;
  const pageReplacement = '...';

  const numberOfPages = getPages(
    firstPage,
    lastPage,
    currentPage,
    maxVisiblePages,
    pageReplacement,
  );

  return (
    <ul className="pagination">
      <li>
        <Link
          className={cn(
            'pagination__link', 'pagination__link_prev',
            { pagination__link_disabled: isFirstPage },
          )}
          to={{
            search: searchByPage(searchParams, { page: `${currentPage - 1}` }),
          }}
        >
          {'<'}
        </Link>
      </li>

      <li className="pagination__list">
        {numberOfPages.map(page => (
          <div key={page}>
            {page === pageReplacement ? (
              <span>{pageReplacement}</span>
            ) : (
              <Link
                className={cn(
                  'pagination__link',
                  { pagination__link_active: currentPage === page },
                )}
                to={{ search: searchByPage(searchParams, { page: `${page}` }) }}
              >
                {page}
              </Link>
            )}
          </div>
        ))}
      </li>

      <li>
        <Link
          className={cn(
            'pagination__link', 'pagination__link_next',
            { pagination__link_disabled: isLastPage },
          )}
          to={{
            search: searchByPage(searchParams, { page: `${currentPage + 1}` }),
          }}
        >
          {'>'}
        </Link>
      </li>
    </ul>
  );
});
