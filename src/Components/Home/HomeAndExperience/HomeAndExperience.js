
import React, { useState } from 'react';
//experience image
import ex1 from '../../../images/ex.png';
import ex2 from '../../../images/ex1.png';
import ex3 from '../../../images/ex2.png';
import ex4 from '../../../images/ex3.png';
//home image
import home1 from '../../../images/room.png';
import home2 from '../../../images/room1.png';
import home3 from '../../../images/room2.png';
import HomeDataCard from '../HomeDataCard/HomeDataCard';
import ExperienceDataCard from '../ExperienceDataCard/ExperienceDataCard';
import { Link } from 'react-router-dom';

const homeDatas = [
    {
        id: 1,
        image: home1,
        caption: 'PREFECT ROOM ',
        description: "Unique cob room",
        review: 52,
        rate: 12,
    },
    {
        id: 2,
        image: home2,
        caption: 'TREE HOUSE',
        description: "The joshua Tree House",
        review: 41,
        rate: 52,
    },
    {
        id: 3,
        image: home3,
        caption: 'AMAZING HOUSE',
        description: "A pirates life for me here",
        review: 5,
        rate: 52,
    },


]

const experienceDatas = [
    {
        id: 1,
        image: ex1,
        caption: 'NIGHTLIFE NEW YORK',
        description: "Discover the city's party scene",
        review: 52,
        rate: 12,
    },
    {
        id: 2,
        image: ex2,
        caption: 'ENTERTAINMENT',
        description: "Tour with local people",
        review: 41,
        rate: 52,
    },
    {
        id: 3,
        image: ex3,
        caption: 'PHOTO CLASS LOS ANGELES',
        description: "Must have a picture here",
        review: 5,
        rate: 52,
    },
    {
        id: 4,
        image: ex4,
        caption: 'PHOTOGRAPPHY NEW YORK',
        description: "Retro photoshoot in NYC",
        review: 12,
        rate: 52,
    },

]

const HomeAndExperience = () => {

    return (
        <div>
            <div className="row mt-5">
                <div className="col-md-6">
                    <h3>Experiences</h3>
                </div>
                <div className="col-md-6 text-end mt-2">
                    <Link>see all</Link>
                </div>
            </div>
            <div className="row">
                {
                    experienceDatas.map(expData => <ExperienceDataCard expData={expData}></ExperienceDataCard>)
                }
            </div>
            <div className="row mt-5">
                <div className="col-md-6">
                    <h3>Homes</h3>
                </div>
                <div className="col-md-6 text-end mt-2">
                    <Link>see all</Link>
                </div>
            </div>
            <div className="row">
                {
                    homeDatas.map(homeData => <HomeDataCard homeData={homeData}></HomeDataCard>)
                }
            </div>
        </div>

    );
};

export default HomeAndExperience;
