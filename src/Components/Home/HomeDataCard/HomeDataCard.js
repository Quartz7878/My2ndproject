import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const HomeDataCard = ({ homeData }) => {
    
    return (
        <div className='col-md-4'>
            <Link style={{textDecoration:"none",color:"black"}} to='/locationInfo'>
                <div className="card border-0">
                <img src={homeData.image} className="card-img-top" alt="" />
                    <div>
                    <small style={{fontSize:"13px",fontWeight:"500"}}>{homeData.caption}</small>
                        <p style={{lineHeight:"20px",fontWeight:"700"}}>{homeData.description}</p>
                        <p style={{lineHeight:"20px",margin:"0", padding:'0',color:"gray"}}>${homeData.rate} per person</p>
                        <p style={{lineHeight:"20px",margin:"0", padding:'0'}}><FontAwesomeIcon style={{ color: "#2BDE8C" }} icon={faStar} />{homeData.review}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default HomeDataCard;