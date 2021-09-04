import React from 'react';
import Card from './Card.jsx'

const BikesCards = ({ bikes }) => {
    return (
        <div>
            {bikes.map((bike) => (
                <Card bike={bike} key={bike.id}></Card>
            ))}
        </div>
    )
}

export default BikesCards;