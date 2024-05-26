
import React, { useContext } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from '../PaymentForm/PaymentForm';
import BookingReview from '../BookingReview/BookingReview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../App';
const stripePromise = loadStripe('pk_test_51IFKV2KMTiWAkqg1xBNMjD6WLgVe0jswLzFV3RbKdksftoftd3Mg2WeOsTnYtS9ANET8cNc6dSvKW1g2lHYXDvHd00vl5Y4nyE');

const Payment = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const hotel = JSON.parse(sessionStorage.getItem('hotel'));
    const guestInfo = JSON.parse(sessionStorage.getItem('formData'));

    const handlePaymentSuccess = paymentId => {
        const orderDetails = {
            ...loggedInUser,
            hotelInfo: hotel,
            guestInfo: guestInfo,
            paymentId,
            orderTime: new Date()
        };
        fetch('http://localhost:4000/payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {

                    alert('your order placed successfully');
                }
            })
    }

    return (
        <div className='container-fluid mt-5'>
            <div className='d-flex mb-5'>
                <h5>1. Review house rules <FontAwesomeIcon icon={faAngleRight}/></h5>
                <h5 className='px-3'>2. Who's coming? <FontAwesomeIcon icon={faAngleRight}/></h5>
                <h5 className='px-2'>3. Confirm and pay <FontAwesomeIcon icon={faAngleRight}/></h5>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <h3>Payment Selection</h3>
                    <div>
                        <Elements stripe={stripePromise}>
                            <PaymentForm handlePaymentSuccess={handlePaymentSuccess}></PaymentForm>
                        </Elements>
                    </div>
                </div>
                <div className="col-md-5 offset-md-1">
                    <BookingReview hotelDetail={hotel}></BookingReview>
                </div>
            </div>
        </div>
    );
};

export default Payment;