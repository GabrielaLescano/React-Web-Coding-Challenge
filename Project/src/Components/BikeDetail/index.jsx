import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Error404 from "../Error404";
import moment from "moment";
import './BikeDetail.css';
import { Link } from "react-router-dom";

function BikeDetail({ match }) {
    const bikeId = match.params.id;
    const [bike, setBike] = useState({});
    const [foundBike, setFoundBike] = useState(true);

    useEffect(() => {
        fetch(`https://bikeindex.org/api/v3/bikes/${bikeId}`)
            .then(response => response.json())
            .then(data => {
                if (data.error) return setFoundBike(false);
                setBike(data.bike);
            });
    }, [])

    return (
        <>
            {
                foundBike ?
                    <div>
                        <Link to='/' style={{textDecoration:'none'}} >
                            <div className='backtohome-container'>
                                <h1 className='home-title'> 
                                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Back_Arrow.svg/768px-Back_Arrow.svg.png' alt='img not found' className='img-arrow' />
                                Back to Search for Stolen Bikes </h1>
                                <img src='https://www.svgrepo.com/show/123686/bike.svg' alt='img not found' className='img-bike-home' />
                            </div>
                        </Link>
                        <div className='detail-container'>
                        <h1 className='title-bike'> {bike.title} </h1>
                        <h3> Stolen:  </h3> 
                        <p> { moment.unix(bike.date_stolen).format("DD-MM-YYYY (HH:mm)")}.  </p>
                        <h3> From: </h3>
                        <p> {bike.stolen_location ? bike.stolen_location : ' Not available '}. </p>
                        <h3> Bike Description: </h3>
                         <p> {bike.description ? bike.description : ' Not available'} </p>
                        {bike.thumb ? <img src={bike.thumb} alt='img not found' width='350px' height='350px'/> : 
                        <img src='https://www.svgrepo.com/show/123686/bike.svg' alt='img not found' width='250px' height='250px'/>}
                        {
                            bike.stolen_record &&
                            <div>
                                <h3> Theft notification date: </h3> <p>{moment.unix(bike.stolen_record.created_at).format("DD-MM-YYYY (HH:mm)")}</p>
                                <h3> Theft description: </h3> <p>{bike.stolen_record.theft_description}.</p>
                            </div>
                        }
                    </div>
                    </div> :
                    <Error404 />
            }
            
        </>
    )
}

BikeDetail.propTypes = {
    match: PropTypes.object
}

export default BikeDetail;