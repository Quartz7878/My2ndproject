
import React, { useMemo, useState } from "react";
import {
    useStripe,
    useElements,
    CardElement,


} from "@stripe/react-stripe-js";
import './PaymentForm.css'
import { Col, Form } from "react-bootstrap";
import paypal from '../../images/paypal.png'
import master from '../../images/master.png'
import visa from '../../images/visa.png'

const useOptions = () => {
    const options = useMemo(
        () => ({
            style: {
                base: {
                    fontSize: '16px',
                    color: "#424770",
                    letterSpacing: "0.025em",
                    fontFamily: "Source Code Pro, monospace",
                    "::placeholder": {
                        color: "#aab7c4"
                    }
                },
                invalid: {
                    color: "#9e2146"
                }
            }
        }),
        []
    );

    return options;
};

const PaymentForm = ({ handlePaymentSuccess }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);
            handlePaymentSuccess(paymentMethod.id)
        }
    };

    // const handleSubmit = async (event) => {
    //     // Block native form submission.
    //     event.preventDefault();

    //     if (!stripe || !elements) {
    //         // Stripe.js has not loaded yet. Make sure to disable
    //         // form submission until Stripe.js has loaded.
    //         return;
    //     }

    //     // Get a reference to a mounted CardElement. Elements knows how
    //     // to find your CardElement because there can only ever be one of
    //     // each type of element.

    // const CardNumberElement = elements.getElement(CardNumberElement);
    // const CardCvcElement = elements.getElement(CardCvcElement);
    // const CardExpiryElement = elements.getElement(CardExpiryElement);
    //     // Use your card Element with other Stripe.js APIs
    //     const { error, paymentMethod } = await stripe.createPaymentMethod({
    //         type: 'card',
    //         card: { CardNumberElement, CardExpiryElement, CardCvcElement },
    //     });

    //     if (error) {
    //         setPaymentError(error.message);
    //         setPaymentSuccess(null);
    //     } else {
    //         setPaymentSuccess(paymentMethod.id);
    //         setPaymentError(null);
    //         handlePaymentSuccess(paymentMethod.id)
    //     }
    // };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='border p-3 mt-4'>
                    <div className="row">
                        <div className="col-md-8">
                            <Col sm={10}>
                                <Form.Check
                                    type="radio"
                                    label="Cradit Card"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                />
                            </Col>
                        </div>
                        <div className="col-md-4 d-flex">
                            <img className=" d-none d-md-block" style={{ width: "60px" }} src={master} alt="" />
                            <img className=" d-none d-md-block" style={{ width: "60px" }} src={visa} alt="" />
                        </div>
                    </div>
                    <p className='text-secondary mx-5'>Safe money transfer useing your bank account. Visa, Maestro, Discover, American Express.</p>
                    <CardElement />
                    {
                        paymentError && <p style={{ color: 'red' }}>{paymentError}</p>
                    }
                </div>
                <div className='border p-3 mt-4'>
                    <div className="row">
                        <div className="col-md-9">
                            <Col sm={10}>
                                <Form.Check
                                    type="radio"
                                    label="Paypal"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                />
                            </Col>
                        </div>
                        <div className="col-md-3 d-flex">
                            <img style={{ width: "80px" }} src={paypal} alt="" />
                        </div>
                    </div>
                    <p className='text-secondary mx-5'>You will be redirected to paypal website to complete your purchase carefully</p>
                </div>
                <button disabled={!stripe} style={{ backgroundImage: 'linear-gradient(30deg, #2BDE8C, #57E869)', width: "250px", float: "right" }} className="btn text-white mt-4 mb-5" type='submit'>
                    Continue to pay
            </button>
            </form>

            {
                paymentSuccess && <p style={{ color: 'green' }}>Your payment was successful.</p>
            }

            {/* <form onSubmit={handleSubmit}>
                <div className='border p-3 mt-4'>
                    <div className="row">
                        <div className="col-md-8">
                            <Col sm={10}>
                                <Form.Check
                                    type="radio"
                                    label="Cradit Card"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                />
                            </Col>
                        </div>
                        <div className="col-md-4 d-flex">
                            <img className=" d-none d-md-block" style={{ width: "60px" }} src={master} alt="" />
                            <img className=" d-none d-md-block" style={{ width: "60px" }} src={visa} alt="" />
                        </div>
                    </div>
                    <p className='text-secondary mx-5'>Safe money transfer useing your bank account. Visa, Maestro, Discover, American Express.</p>
                    <label style={{ width: "100%" }}>
                        Card number
                    <CardNumberElement
                            options={options}
                            onReady={() => {
                                console.log("CardNumberElement [ready]");
                            }}
                            onChange={event => {
                                console.log("CardNumberElement [change]", event);
                            }}
                            onBlur={() => {
                                console.log("CardNumberElement [blur]");
                            }}
                            onFocus={() => {
                                console.log("CardNumberElement [focus]");
                            }}
                        />
                    </label>

                    <label style={{ width: "100%" }}>
                        Expiration date
                    <CardExpiryElement
                            options={options}
                            onReady={() => {
                                console.log("CardNumberElement [ready]");
                            }}
                            onChange={event => {
                                console.log("CardNumberElement [change]", event);
                            }}
                            onBlur={() => {
                                console.log("CardNumberElement [blur]");
                            }}
                            onFocus={() => {
                                console.log("CardNumberElement [focus]");
                            }}
                        />
                    </label>

                    <label style={{ width: "100%" }}>
                        CVC
                    <CardCvcElement
                            options={options}
                            onReady={() => {
                                console.log("CardNumberElement [ready]");
                            }}
                            onChange={event => {
                                console.log("CardNumberElement [change]", event);
                            }}
                            onBlur={() => {
                                console.log("CardNumberElement [blur]");
                            }}
                            onFocus={() => {
                                console.log("CardNumberElement [focus]");
                            }}
                        />
                    </label>
                </div>
                <div className='border p-3 mt-4'>
                    <div className="row">
                        <div className="col-md-9">
                            <Col sm={10}>
                                <Form.Check
                                    type="radio"
                                    label="Paypal"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                />
                            </Col>
                        </div>
                        <div className="col-md-3 d-flex">
                            <img style={{ width: "80px" }} src={paypal} alt="" />
                        </div>
                    </div>
                    <p className='text-secondary mx-5'>You will be redirected to paypal website to complete your purchase carefully</p>
                </div>
                <button disabled={!stripe} style={{ backgroundImage: 'linear-gradient(30deg, #2BDE8C, #57E869)', width: "250px", float: "right" }} className="btn text-white mt-4 mb-5" type='submit'>
                    Continue to pay
            </button>
            </form>
            {
                paymentError && <p style={{ color: 'red' }}>{paymentError}</p>
            }
            {
                paymentSuccess && <p style={{ color: 'green' }}>Your payment was successful.</p>
            }*/}
        </div >
    );
};

export default PaymentForm;