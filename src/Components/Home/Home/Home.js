import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import BookingInfo from '../BookingInfo/BookingInfo';
import HomeAndExperience from '../HomeAndExperience/HomeAndExperience';

const Home = () => {
    return (
        <div className='container-fluid'>
            <Navbar></Navbar>
            <div className="row">
                <div className="col-md-4">
                    <BookingInfo></BookingInfo>
                </div>
                <div className="col-md-8">
                <HomeAndExperience></HomeAndExperience>
                </div>
            </div>
        </div>
    );
};

export default Home;