import React, { useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import map from '../../images/map.png';
import LocationDataCard from '../LocationDataCard/LocationDataCard';
import Maps from '../Map/Maps';


const LocationInfo = () => {

    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/hotel', {
            method: 'GET',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                setHotels(data)
            })
    }, [])

    const guestDetail = JSON.parse(sessionStorage.getItem('formData'))

    const optionsStyle = {
        border: "1px solid gray",
        padding: '2px',
        marginRight: "2px",
        borderRadius: "20px"
    }
    return (
        <div className='container-fluid'>
            <div>
                <Navbar></Navbar>
            </div>
            { guestDetail === null ?
                <div>
                    <h4 className='text-danger text-center'>You did not select any location</h4>
                </div>
                : <div>
                    <div className="row">
                        <div className="col-md-6">
                            <div style={{ margin: "0", padding: "0", lineHeight: "15px" }}>
                                <small>
                                    252 stays {new Date(guestDetail.checkIn).toLocaleString('en-us', { month: 'short', day: 'numeric' })}-{new Date(guestDetail.checkOut).getDate()} {guestDetail.adult + guestDetail.children}
                            Guests
                            </small>
                                <h6 className='fw-bold mb-3'>Stay in {guestDetail.locationName}</h6>
                            </div>
                            <div className='d-flex mb-3'>
                                <small style={optionsStyle}>Cancellation fixibility</small>
                                <small style={optionsStyle}>Type of place</small>
                                <small style={optionsStyle}>Price</small>
                                <small style={optionsStyle}>Instant Book</small>
                                <small style={optionsStyle}>More Filter</small>
                            </div>
                            <div>
                                {
                                    hotels.map(locationData => <LocationDataCard locationData={locationData}></LocationDataCard>)
                                }
                            </div>
                        </div>
                        <div className="col-md-6">
                            <Maps></Maps>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default LocationInfo;