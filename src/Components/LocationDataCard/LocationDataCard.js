
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';


const LocationDataCard = (props) => {
    const { id, image, description, detail, condition, cancel, rate, review} = props.locationData;
    
    return (
        <div>
            <div className="border-top-0 border-start-0 border-end-0 card mb-1">
                
                    <Link className='text-decoration-none' to={`/bookingDetail/${id}`}>
                        <div className="row">
                            <div className="col-md-6">
                                <img style={{borderRadius:"10px"}} className='img-fluid' src={image} alt="" />
                            </div>
                            <div className="col-md-6">
                                <h5 className='text-dark'>{description}</h5>
                                <p className='text-secondary'>{detail}</p>
                                <p className='text-secondary'>{condition}</p>
                                <p className='text-secondary'>{cancel}</p>
                                <p className='text-secondary'>${rate} per person</p>
                                <div className="row">
                                    <div className="col">
                                        <p className='text-dark'><FontAwesomeIcon style={{ color: "#2BDE8C" }} icon={faStar} />{review}</p>
                                    </div>
                                    <div className="col">
                                        <h6 className='text-dark'>${rate}/Night</h6>
                                        <p className='text-secondary'>$167 total</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
               
            </div>

        </div>
    );
};

export default LocationDataCard;