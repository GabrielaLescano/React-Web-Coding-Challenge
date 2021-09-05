import React from 'react';
import moment from 'moment';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';
import './Card.css'

const Card = ({ bike }) => {
    return (
        <div className='card-container'>
            <div className='img-card-container'>
                {bike.thumb ? <img src={bike.thumb} alt='img not found' width='250px' height='250px'/> : 
                        <img src='https://www.svgrepo.com/show/123686/bike.svg' alt='img not found' width='250px' height='250px'/>}
                
            </div>
            <div className='description-container'>
                <Link to={`/case/${bike.id}`} style={{textDecoration:'none'}} > 
                    <h3 className='title-case'>{bike.title}</h3>
                </Link>
                <span> Stolen in: {bike.date_stolen ? moment.unix(bike.date_stolen).format("DD-MM-YYYY (HH:mm)") : 'Not available'}</span> 
                <br></br>
                <span> Location: {bike.stolen_location ? bike.stolen_location : ' Not available '}. </span>
                <br></br>
                <span> Description: {bike.description ? <Link to={`/case/${bike.id}`} style={{textDecoration:'none'}} className='description-case'> Enter for more info </Link> : ' Not available '} </span>
            </div>
        </div>
    )
}

Card.propTypes = {
    bike: PropType.shape({
        id: PropType.number,
        title: PropType.string,
        thumb: PropType.string,
        date_stolen: PropType.number,
        stolen_location: PropType.string,
        description: PropType.string
    })
}

export default Card;