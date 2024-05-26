
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const ExperienceDataCard = ({ expData }) => {
    
    return (
        <div className='col-md-3'>
            <Link style={{ textDecoration: "none", color: "black" }} to='/locationInfo'>
                <div class="card border-0">
                    <img src={expData.image} className="card-img-top" alt="..." />
                    <div>
                        <small style={{fontSize:"13px",fontWeight:"500"}}>{expData.caption}</small>
                        <p style={{lineHeight:"20px",fontWeight:"700"}}>{expData.description}</p>
                        <p style={{lineHeight:"20px",margin:"0", padding:'0',color:"gray"}}>${expData.rate} per person</p>
                        <p style={{lineHeight:"20px",margin:"0", padding:'0'}}><FontAwesomeIcon style={{ color: "#2BDE8C" }} icon={faStar} />{expData.review}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ExperienceDataCard;
