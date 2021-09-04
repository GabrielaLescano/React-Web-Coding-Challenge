import React from "react";
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

function Pagination({ handleChange, counter, results }) {
    const totalPages = Math.round(results / 10);

    return (
        <div>
            <div>Page <b>{counter + 1}</b> / {totalPages}</div>
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