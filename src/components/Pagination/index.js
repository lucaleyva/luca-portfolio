import React from 'react';
import './styles.css';

const Pagination = ({ currentPage, totalPages, paginate }) => {
  return (
    <nav className='pagination-nav' role="navigation" aria-label="Pagination Navigation">
      <button
        className='page-button'
        onClick={() => paginate(currentPage === 1 ? totalPages : currentPage - 1)}
        aria-label="Previous Page"
      >
        Previous
      </button>
      <span className='page-info' role="status" aria-live="polite">
        {currentPage} of {totalPages}
      </span>
      <button
        className='page-button'
        onClick={() => paginate(currentPage === totalPages ? 1 : currentPage + 1)}
        aria-label="Next Page"
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;