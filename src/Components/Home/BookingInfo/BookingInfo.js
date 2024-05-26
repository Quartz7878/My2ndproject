import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const BookingInfo = () => {
    const { register, errors } = useForm();
    const [locationName, setLocationName] = useState();
    const [adultQuantity, setAdultQuantity] = useState(1);
    const [childrenQuantity, setChildrenQuantity] = useState(0);
    const [babiesQuantity, setBabiesQuantity] = useState(0);
    const [selectedDate, setSelectedDate] = useState({
        checkIn: new Date(),
        checkOut: new Date()
    });

    const handleBlur = e => {
        const newLocaton = { ...locationName }
        newLocaton[e.target.name] = e.target.value
        setLocationName(newLocaton)
        console.log(e.target.name, e.target.value);
    }

    const handleSubmit = (e) => {
        const locationInfo = { ...locationName, ...selectedDate, adult: adultQuantity, children: childrenQuantity, babies: babiesQuantity }
        sessionStorage.setItem('formData', JSON.stringify(locationInfo))
        e.preventDefault()
        alert('your information is submitted. Now choose experiences/homes option to go forward')

    };


    const handleCheckInDate = (date) => {
        const newDates = { ...selectedDate }
        newDates.checkIn = date;
        setSelectedDate(newDates);
    };

    const handleCheckOutDate = (date) => {
        const newDates = { ...selectedDate }
        newDates.checkOut = date;
        setSelectedDate(newDates);
    };


    return (
        <div className='container'>
            <h5>Where do you want to go</h5>
            <div>
                <Form onSubmit={handleSubmit} className='mt-5'>
                    <Form.Group controlId="formName">
                        <Form.Label className='ms-2 fw-bold'>Location</Form.Label>
                        <Form.Control onBlur={handleBlur} className='border-0' name='locationName' type='text' ref={register({ required: true })} placeholder="Add city, landmark or address" />
                        {errors.name && <span className='text-danger'>This field is required</span>}
                    </Form.Group>

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                            <div className="row">
                                <div className="col">
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="dd/MM/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="Check In Date"
                                        value={selectedDate.checkIn}
                                        onChange={handleCheckInDate}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </div>
                                <div className="col">
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="Check Out Date"
                                        format="dd/MM/yyyy"
                                        value={selectedDate.checkOut}
                                        onChange={handleCheckOutDate}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </div>
                            </div>
                        </Grid>
                    </MuiPickersUtilsProvider>
                    <div className = 'mt-4'>
                        <p className='border-bottom'>{adultQuantity} Adult, {childrenQuantity} Children, {babiesQuantity} Babies</p>
                        <div className='row'>
                            <div className="col-md-8">
                                <p>adult</p>
                            </div>
                            <div className="col-md-4 d-flex justify-content-between">
                                <input type="button" value="-" onClick={() => setAdultQuantity(adultQuantity - 1)} />
                                <span className='mt-2'>{adultQuantity}</span>
                                <input type="button" value="+" onClick={() => setAdultQuantity(adultQuantity + 1)} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-md-8">
                                <p>children</p>
                            </div>
                            <div className="col-md-4 d-flex justify-content-between">
                                <input type="button" value="-" onClick={() => setChildrenQuantity(childrenQuantity - 1)} />
                                <span className='mt-2'>{childrenQuantity}</span>
                                <input type="button" value="+" onClick={() => setChildrenQuantity(childrenQuantity + 1)} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-md-8">
                                <p>Babies</p>
                            </div>
                            <div className="col-md-4 d-flex justify-content-between">
                                <input type="button" value="-" onClick={() => setBabiesQuantity(babiesQuantity - 1)} />
                                <span className='mt-2'>{babiesQuantity}</span>
                                <input type="button" value="+" onClick={() => setBabiesQuantity(babiesQuantity + 1)} />
                            </div>
                        </div>
                    </div>
                    <button style={{ border: '1px solid #2BDE8C', color:"#2BDE8C", fontWeight:"bold", width: "100px", float:"right"}} className="btn mb-5 mt-4" type='submit'>
                        Apply
                        </button>
                </Form>
            </div>
            <button style={{ backgroundImage: 'linear-gradient(30deg, #2BDE8C, #57E869)', width: "100%" }} className="btn text-white" type='search'><FontAwesomeIcon icon={faSearch} /> Search</button>
        </div>
    );
};

export default BookingInfo;