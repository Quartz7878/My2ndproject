
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import man from '../../images/man.png'
import BookingReview from '../BookingReview/BookingReview';

const Message = () => {
    const hotelInfo = JSON.parse(sessionStorage.getItem('hotel'));

    return (
        <div className='container-fluid mt-5'>
            <div className='d-flex mb-5'>
                <h5>1. Review house rules <FontAwesomeIcon icon={faAngleRight}/></h5>
                <h5 className='px-3'>2. Who's coming? <FontAwesomeIcon icon={faAngleRight}/></h5>
                <h5 className='text-secondary px-2'>3. Confirm and pay <FontAwesomeIcon icon={faAngleRight}/></h5>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <h2>Travelling for work</h2>
                    <div className="row">
                        <div className="col-md-9">
                            <p>Say hello to your host</p>
                            <p>Let's Rowdra know little about your and why you are coming.</p>
                        </div>
                        <div className='col-md-3 d-none d-md-block'>
                            <img style={{width:"60px",height:"60px", borderRadius:"50%"}} src={man} alt=""/>
                            <p>Rowdra</p>
                        </div>
                    </div>
                    <Form.Group controlId="Textarea">
                        <Form.Control as="textarea" rows={5} required placeholder='Send a message to your host'/>
                    </Form.Group>
                    <Link to='/payment'>
                        <button style={{ backgroundImage: 'linear-gradient(30deg, #2BDE8C, #57E869)', width: "auto" }} className="btn text-white mt-3" type='submit'>Continue</button>
                    </Link>
                </div>
                <div className="col-md-5 offset-md-1">
                    <BookingReview hotelDetail={hotelInfo}></BookingReview>
                </div>
            </div>
        </div>
    );
};

export default Message;