import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import NoResults from '../NoResults';
import { connect } from 'react-redux';
import './BikesCards.css'

function BikesCards({ bikes, is_fetching }) {
    const is_empty = bikes.length < 1;

    return (
        <div>
            { 
                is_fetching && <div className='text-loading'>Loading <img src='https://www.almazen.com.pe/wp-content/plugins/payment-qr-woo/assets/loader.gif' width='20px' height='20px' /></div>
            }
            <div className='bikescards-container' style={{ opacity: is_fetching ? 0.5 : 1 }}>
                {
                    is_empty 
                        ? <NoResults /> : bikes.map((bike) => (
                            <Card bike={bike} key={bike.id}></Card>
                        ))
                }
            </div>
        </div>
    )
}

BikesCards.propTypes = {
    bikes: PropTypes.array,
    is_fetching: PropTypes.bool
}

function mapStateToProps(state) {
    return {
        is_fetching: state.is_fetching
    }
}

export default connect(mapStateToProps)(BikesCards);