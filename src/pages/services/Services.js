import React, { useEffect, useState } from 'react';
import SingleService from '../singleService/SingleService';
import './services.css';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/servicesData.json')
        .then((response) => response.json())
        .then((data) => setServices(data))
        .catch((error) => console.error(error.message));
    }, [])

    return (
        <div id="services-section">
            <div className="container-xl">
                <div data-aos="fade-left" data-aos-duration="2000" className="services-section-heading">
                    <h2><span>My</span> <span>Services</span></h2>
                </div>
                <div className="services-container">
                    {
                        services.map((service) => <SingleService key={service.id} service={service} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;