import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import aboutImage from "../../images/about-us.png";
import "./about.css";

const About = () => {
    const redirect = (url) => {
        window.open(url, "_blank");
        return null;
    };
    return (
        <div id="about-section">
            <div className="container">
                <div className="about-section-heading">
                    <h2 data-aos="fade-down" data-aos-duration="1500">
                        About Me
                    </h2>
                </div>
                <div className="about-section-container">
                    <div className="about-section-developer-image">
                        <img src={aboutImage} alt="" />
                    </div>
                    <div className="about-secttion-developer-details">
                        <p data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500">
                            Hello Everyone. I am Sheikh Ariful Islam, a{" "}
                            <span className="development-category">MERN</span> Stack Web Developer.I have been involved
                            in web development for over a year. I always like to learn new and challenging things about
                            programming. So I spent this long year learning new things about programming and project
                            creation.
                        </p>

                        <p data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
                            I have recently done some projects using HTML, CSS, javascript, bootstrap, react, firebase,
                            node js express js, and MongoDB. I always try to learn new things and try new.
                        </p>
                        <div className="contact-link">
                            <h2>Follow Me</h2>
                            <div className="social-website-link">
                                <div className="link" onClick={() => redirect("https://github.com/sheikharifulislam")}>
                                    <FaGithub size={30} color="#333" title="GitHub" />
                                </div>
                                <div
                                    className="link"
                                    onClick={() => redirect("https://www.linkedin.com/in/sheikh-ariful-islam1/")}
                                >
                                    <FaLinkedin size={30} color="#333" title="LinkedIn" />
                                </div>
                                <div
                                    className="link"
                                    onClick={() => redirect("https://www.facebook.com/sheikhariful.9465177")}
                                >
                                    <FaFacebook size={30} color="#333" title="Facebook" />
                                </div>
                                <div className="link" onClick={() => redirect("https://twitter.com/SheikhArifulI14")}>
                                    <FaTwitter size={30} color="#333" title="Twitter" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
