import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import NoResults from '../NoResults';
import { connect } from 'react-redux';

function BikesCards({ bikes, is_fetching }) {
    const is_empty = bikes.length < 1;

    return (
        <div>
            { 
                is_fetching && <div>Cargando...</div>
            }
            <div style={{ opacity: is_fetching ? 0.5 : 1 }}>
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