import React from 'react';
import aboutImage from '../../images/about-us.png';
import './about.css';

const About = () => {
    return (
        <div id="about-section">
            <div className="container">
                <div className="about-section-heading">
                    <h2 data-aos="fade-down" data-aos-duration="1500">About Me</h2>
                </div>
                <div className="about-section-container">
                    <div className="about-section-developer-image">
                        <img src={aboutImage} alt="" />
                    </div>
                    <div className="about-secttion-developer-details">
                        <p data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500">Hello Everyone. I am Sheikh Ariful Islam. I am a <span className="development-category">MERN</span> Stack Web Developer. I have been involved in web development for over a year. I always like to learn new and difficult things about programming. I spent this long one year learning new things about programming and project creation.</p>
                        
                        <p data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">I have recently done some projects using HTML, CSS, javascript, bootstrap, react, firebase, node js express js, and MongoDB I always try to learn new things and try new.</p>
                        <div className="contact-link">
                            <h4>WhatApp: <a href="tel:+8801729527451">+8801729527451</a></h4> 
                            <h4>Email: <a href="mailto:webprogramming.ariful@gmail.com">webprogramming.ariful@gmail.com</a></h4>
                            <div className="social-website-link">
                                <a href="https://github.com/sheikharifulislam?tab=repositories" target="_blank" title="FaceBook"><i class="fab fa-github"></i></a>
                                <a href="https://www.facebook.com/sk.rayhan.9465177" target="_blank" title="GitHub"><i class="fab fa-facebook"></i></a>
                                <a href="https://www.linkedin.com/in/sheikh-ariful-islam1/" target="_blank" title="Linkedin"><i class="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;