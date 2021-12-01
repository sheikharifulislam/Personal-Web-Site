import React from 'react';
import './headerBanner.css';
import developerImage from '../../images/banner-image.png'
import {Flip,Fade,Rotate,Roll} from 'react-reveal';
import {useNavigate } from 'react-router-dom';

const HeaderBanner = () => {


    const navigate = useNavigate();

    const handleHiremeButton = e => {
        navigate('/contact',{
            replace: true,
        })
    }

    return (
        <div id="header-banner">
            <div className="container">
                <div className="header-banner-container">
                    <div className="header-banner-text">
                        <div className="header-banner-heading">
                            <Flip  bottom>
                                <h2>NEXT LEVEL</h2>
                            </Flip >
                            <Rotate top right>
                                <h2>DESIGN &</h2>
                            </Rotate>
                            <Roll left>
                                <h2>ENGINEERING</h2>
                            </Roll>
                        </div>
                        <hr id="header-banner-hr"/>
                        <div className="header-banner-details">
                            <p id="wellcome-message">Hello ! I'm</p>
                            <Fade left>
                                <h2><span id="developer-first-name">Sheikh</span> <span id="developer-mid-name">Ariful</span> <span id="developer-last-name">Islam</span></h2>
                            </Fade>
                            <p id="developer-simple-details">I am a MERN Stack Developer. I Will Create a Design and Development that can give value to your product</p>
                            <div className="hireme-section">
                                <button className="hire-me-btn" onClick={handleHiremeButton}>
                                    Hire Me
                                </button>
                            </div>                        
                        </div>
                    </div>
                    <div className="header-banner-image">
                        <img src={developerImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderBanner;