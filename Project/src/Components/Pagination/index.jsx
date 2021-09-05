import React from "react";
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import './Pagination.css';

function Pagination({ handleChange, counter, results }) {
    const totalPages = Math.round(results / 10);

    return (
        <div className='pagination-container'>
            <div className='total-pages'> Page <b>{counter + 1}</b> / {totalPages}</div>
            <ReactPaginate
                key={results}
                pageCount={totalPages} 
                pageRangeDisplayed={5} 
                marginPagesDisplayed={1} 
                onPageChange={(page) => handleChange(page.selected)}
                />
        </div>
    )
}

Pagination.propTypes = {
    handleChange: PropTypes.func,
    counter: PropTypes.number,
    results: PropTypes.number
}

export default Pagination;