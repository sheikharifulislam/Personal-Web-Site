import React from "react";
import { NavLink } from "react-router-dom";
import "./singlePortfolio.css";

const SinglePortfolio = ({ portfolio }) => {
    const { id, portfolioImage, githubLink, liveSiteLInk } = portfolio;

    return (
        <div data-aos="zoom-out-down" data-aos-duration="2000" className="single-portfolio">
            <div className="portfolio-image">
                <img src={portfolioImage} alt="" />
            </div>
            <div className="portfolio-info">
                <div className="portfolio-link">
                    <span>
                        <a href={githubLink} target="_blank" rel="noreferrer">
                            <i class="fab fa-github"></i> Github Link
                        </a>
                    </span>
                    <span>
                        <a href={liveSiteLInk} target="_blank" rel="noreferrer">
                            <i class="fab fa-firefox-browser"></i> Live Link
                        </a>
                    </span>
                </div>
                <div className="portfolio-details-btn">
                    <NavLink to={`/portfolio-details/${id}`}>Details</NavLink>
                </div>
            </div>
        </div>
    );
};

export default SinglePortfolio;
