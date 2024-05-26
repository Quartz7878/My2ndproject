
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import building from '../../images/building.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faHome, faStar } from '@fortawesome/free-solid-svg-icons';
import owner from '../../images/man.png'
import manIcon from '../../images/manIcon.png'
import home from '../../images/home.png'
import spray from '../../images/spray.png'
import thik from '../../images/thik.png'
import BookingReview from '../BookingReview/BookingReview';

const BookingDetail = () => {
    const { id } = useParams();
    const [hotelDetail, setHotelDetail] = useState({})

     useEffect(() => {
        fetch(`http://localhost:4000/hotels/${id}`)
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem('hotel', JSON.stringify(data))
                console.log(data);
                setHotelDetail(data)
            })
    }, {});

    const guestDetail = JSON.parse(sessionStorage.getItem('formData'))

    return (
        <div className='container-fluid'>
            <div>
                <Navbar></Navbar>
            </div>
            <div className='d-flex'>
                <img style={{ width: '50%', height: "25em" }} src={building} alt="" />
                <img style={{ width: '50%', height: "25em" }} src={hotelDetail.image} alt="" />
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-9 mt-4">
                            <h3>{hotelDetail.description}</h3>
                            <p className='fw-bold'> Location: {guestDetail.locationName}</p>
                        </div>
                        <div className="col-md-3 text-end d-none d-md-block mt-4">
                            <img style={{ width: "60px", height: "60px", borderRadius: "50%" }} src={owner} alt="" />
                            <p>Rowdra</p>
                        </div>
                    </div>
                    <p>{hotelDetail.detail}</p>
                    <hr />
                    <div className="d-flex">
                        <img style={{ height: "40px", padding: "3px" }} src={home} alt="" />
                        <div className='p-2 text-secondary'>
                            <h6>Entire Home</h6>
                            <p>Your will have the condominium to yourself</p>
                        </div>

                    </div>
                    <div className="d-flex">
                        <img style={{ height: "40px", padding: "3px" }} src={thik} alt="" />
                        <div className='p-2 text-secondary'>
                            <h6>Self check-in</h6>
                            <p>You can check in with the doorman</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <img style={{ height: "40px", padding: "3px" }} src={spray} alt="" />
                        <div className='p-2 text-secondary'>
                            <h6>Sparkling clean</h6>
                            <p>10 recent guests said this place was sparkling clean</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <img style={{ height: "40px", padding: "3px" }} src={manIcon} alt="" />
                        <div className='p-2 text-secondary'>
                            <h6>Rowdra is a Superhost </h6>
                            <p>Superhosts are experienced, highly rated host who are committed to providing grate stays for guests.</p>
                        </div>
                    </div>
                    <hr />
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ea. Voluptatem quae sequi unde, obcaecati rerum placeat, sit voluptas,
                    officiis aliquid optio quibusdam doloribus. Quaerat doloremque fugit, provident rerum eaque blanditiis velit. Commodi, eius aliquam impedit beatae,
                            voluptas eaque, placeat reprehenderit doloribus voluptatem molestias tenetur vero quisquam quibusdam nostrum omnis! <br /> <Link style={{ fontWeight: "700" }}>Read more about the space <FontAwesomeIcon icon={faAngleDown} /></Link></p>
                    <h6>Reviews</h6>
                    <p><FontAwesomeIcon style={{ color: "#2BDE8C" }} icon={faStar} />{hotelDetail.review}(20)</p>
                </div>

                <div className="col-md-5 offset-md-1 mt-5">
                    <BookingReview hotelDetail={hotelDetail}></BookingReview>
                    <Link to='/houseRules'>
                        <button style={{ backgroundImage: 'linear-gradient(30deg, #2BDE8C, #57E869)', width: "100%" }} className="btn text-white mt-2 mb-3" type='submit'>
                            Reserve
                            </button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default BookingDetail;
