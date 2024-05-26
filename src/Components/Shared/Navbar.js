
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const guestDetail = JSON.parse(sessionStorage.getItem('formData'))
    
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid border-bottom fw-bold fs-6">
                <Link style={{ fontSize: '50px', background: 'linear-gradient(70deg, #2BDE8C, #57E869)', webkitBackgroundClip: 'text', webkitTextFillColor: 'transparent', }} to='/home'>Aircnc</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">

                        {  guestDetail?
                            <div class="nav-item me-4 d-flex">
                                <li class="nav-link">{guestDetail.locationName} |</li>
                                <li class="nav-link">{new Date(guestDetail.checkIn).toLocaleString('en-us',{month:'short', day:'numeric'})}-{new Date(guestDetail.checkOut).toLocaleString('en-us',{ day:'numeric'})} |</li>
                                <li class="nav-link">{guestDetail.adult + guestDetail.children + guestDetail.babies} Guests </li>
                                {/* <input type="search"/> */}
                                <li class="nav-link"><FontAwesomeIcon style={{color:"#2BDE8C"}} icon={faSearch}/> </li>
                            </div>
                            :<div className='nav-item d-flex'>
                            <li class="nav-item me-4">
                                <a class="nav-link " href="#">Host your home</a>
                            </li>
                            <li class="nav-item me-4">
                                <a class="nav-link" href="#">Host your experience</a>
                            </li>
                        </div>
                        }
                        <li class="nav-item me-4">
                            <a class="nav-link " href="#">Help</a>
                        </li>
                        <li class="nav-item me-4">
                            <Link class="nav-link" to='/login'>Login</Link>
                        </li>
                        <li style={{ backgroundImage: 'linear-gradient(70deg, #2BDE8C, #57E869)', borderRadius: '20px', width: "100px" }} class="nav-item me-5">
                            <Link class="nav-link text-white text-center" to="/login">Sign up</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;