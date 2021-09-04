import React from 'react';
import moment from 'moment';

const Card = ({ bike }) => {
    return (
        <div>
            <h3>{bike.title}</h3>
            <span> {bike.thumb ? <img src={bike.thumb} alt='img not found' width='250px' height='250px'/> : 
                    <img src='https://www.svgrepo.com/show/123686/bike.svg' alt='img not found' width='250px' height='250px'/>}
            </span>
            <span> Stolen in: {moment(bike.date_stolen).format("DD-MM-YYYY (HH:mm)")}, {bike.stolen_location} </span>
            <br></br>
            <span> Description: {bike.description ? bike.description : '-'} </span>
        </div>
    )
}

export default Card;