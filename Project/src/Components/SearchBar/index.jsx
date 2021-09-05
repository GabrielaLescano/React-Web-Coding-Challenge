import React, { useEffect, useRef, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchData, filterBikes } from '../../actions';
import PropTypes from 'prop-types'
import Pagination from '../Pagination';
import moment from 'moment';
import './SearchBar.css'

function SearchBar({ results, bikes }) {
    const dispatch = useDispatch();
    const [counter, setCounter] = useState(0);
    const input = useRef(null);
    const fromInput = useRef(null);
    const toInput = useRef(null);

    useEffect(() => {
        handleSearch();
    }, [])
    
    function handleSearch(page = 0) {
        dispatch(fetchData(input.current.value, page + 1));
        setCounter(page);
        handleSelectDate();
    }

    function handleSelectDate() {        
        const minDate = moment(fromInput.current.value).unix() || 10;
        const maxDate = moment(toInput.current.value).unix() || Infinity
        const filter = bikes.filter(bike => {
            return (bike.date_stolen > minDate && bike.date_stolen < maxDate)
        })

        dispatch(filterBikes(filter));
    }
    
    return (
        <div className='searchbar-container'>
            <div className='inputs-container'>
                <input className='input-search' type='text' placeholder='Search case or location' ref={input}/>
               <input className='input-date' type="date" onBlur={handleSelectDate} ref={fromInput}/>
               <input className='input-date' type="date" onBlur={handleSelectDate} ref={toInput}/>
                <button className='btn-search' onClick={() => handleSearch()}>Find</button>
            </div>
           <h5 className='text-results'> Total cases found: {results}.</h5>
           <Pagination results={results} counter={counter} handleChange={(page) => handleSearch(page)} />
        </div>
    )
}

SearchBar.propTypes = {
    results: PropTypes.number,
    bikes: PropTypes.array
}

function mapStateToProps(state) {
    return {
        results: state.results,
        bikes: state.bikes
    }
}

export default connect(mapStateToProps)(SearchBar);