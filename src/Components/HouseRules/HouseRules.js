import { faAngleDown, faAngleRight, faCartArrowDown, faPaw, faSmoking, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import BookingReview from '../BookingReview/BookingReview';
import troli from '../../images/troli.png';
import leg from '../../images/legIcon.png'
import not from '../../images/forbidden.png'
import smoke from '../../images/smoke.png'

const HouseRules = () => {
    const hotelInfo = JSON.parse(sessionStorage.getItem('hotel'));
    const guestDetail = JSON.parse(sessionStorage.getItem('formData'));
    function dateDiffInDays(date1, date2) {
        // round to the nearest whole number
        return Math.round((date2 - date1) / (1000 * 60 * 60 * 24));
    }
    let dayCount = dateDiffInDays(new Date(guestDetail.checkIn), new Date(guestDetail.checkOut));

    const imgStyle ={ 
        height: "40px", 
        padding: "3px", 
        border: "1px solid gray" 
    }

    return (
        <div className='container-fluid mt-5'>
            <div className='d-flex mb-5'>
                <h5>1. Review house rules <FontAwesomeIcon icon={faAngleRight}/></h5>
                <h5 className='text-secondary px-3'>2. Who's coming? <FontAwesomeIcon icon={faAngleRight}/></h5>
                <h5 className='text-secondary px-2'>3. Confirm and pay <FontAwesomeIcon icon={faAngleRight}/></h5>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <h2>Review House Rules</h2>
                    <p className='fs-5 fw-bold'>{dayCount} night in {guestDetail.name}</p>
                    <div className="row">
                        <div className="col" id='checkIn'>
                            <label htmlFor="checkIn">Check in :</label>
                            {new Date(guestDetail.checkIn).toLocaleString('en-us',{month:'short', day:'numeric'})}
                        </div>
                        <div className="col" id='checkOut'>
                            <label htmlFor="checkOut">Check Out :</label>
                            {new Date(guestDetail.checkOut).toLocaleString('en-us',{month:'short', day:'numeric'})}
                        </div>
                        <p>Self check in whith building staff</p>
                    </div>
                    <hr />
                    <div>
                        <h2 className='mb-4'>Things keep in mind</h2>
                        <div className="d-flex">
                            <img style={imgStyle} src={troli} alt="" />
                            <p className='p-2 fw-bold fs-5'>Suitable for kitchen and infants</p>
                        </div>
                        <div className="d-flex">
                            <img style={imgStyle} src={leg} alt="" />
                            <p className='p-2 fw-bold fs-5'>Pet alloewd</p>
                        </div>
                        <div className="d-flex">
                            <img style={imgStyle} src={not} alt="" />
                            <p className='p-2 fw-bold fs-5'>No parties and events allowed</p>
                        </div>
                        <div className="d-flex">
                            <img style={imgStyle} src={smoke} alt="" />
                            <p className='p-2 fw-bold fs-5'>Smoking allowed</p>
                        </div>
                        <Link className='fw-bold mb-5'>Read More  <FontAwesomeIcon icon={faAngleDown} /></Link>
                    </div>
                    <Link to='/message'>
                        <button style={{ backgroundImage: 'linear-gradient(30deg, #2BDE8C, #57E869)', width: "250px" }} className="btn text-white mt-5 mb-3" type='submit'>Agree and continue</button>
                    </Link>
                </div>
                <div className="col-md-5 offset-md-1">
                    <BookingReview hotelDetail={hotelInfo}></BookingReview>
                </div>
            </div>
        </div>
    );
};

export default HouseRules;