import React from 'react';
import BikesCards from '../BikesCards/';
import SearchBar from '../SearchBar/';
import PropTypes from 'prop-types';
import ErrorFetching from '../ErrorFetching';
import { connect } from 'react-redux';
import './Home.css'

function Home({ bikes, fetching_error }) {

    return (
        <div className='home-container'>
            <div className='title-home-container'>
                <h1 className='home-title'>Search for Stolen Bikes </h1>
                <img src='https://www.svgrepo.com/show/123686/bike.svg' alt='img not found' className='img-bike-home' />
            </div>
            <SearchBar/>
            {
                fetching_error 
                    ? <ErrorFetching /> : <BikesCards bikes={bikes}/>
            }
            
        </div>
    )
}

Home.propTypes = {
    bikes: PropTypes.array,
    fetching_error: PropTypes.bool
}

function mapStateToProps(state) {
    return {
        bikes: state.filtered_bikes,
        fetching_error: state.fetching_error
    }
}

export default connect(mapStateToProps)(Home);