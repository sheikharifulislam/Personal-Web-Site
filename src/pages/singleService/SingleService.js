import React from 'react';
import './singleService.css';

const SingleService = ({service}) => {
    const {serviceName,serviceImage,serviceDetails} = service;
    return (
        <div data-aos="zoom-in-left" data-aos-duration="2000" className="single-service">
            <div className="single-service-container">
                <div className="single-service-image">
                    <img src={serviceImage} alt="" />
                </div>
                <div className="single-service-title">
                    <h4>{serviceName}</h4>
                </div>
                <div className="single-service-details">
                    <p>{serviceDetails}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleService;