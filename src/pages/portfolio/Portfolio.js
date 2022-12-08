import React, { useEffect, useState } from "react";
import Slide from "react-reveal/Slide";
import SinglePortfolio from "../singlePortfolio/SinglePortfolio";
import "./portfolio.css";

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        fetch("/portfolioData.json")
            .then((response) => response.json())
            .then((data) => setPortfolio(data))
            .catch((error) => console.log(error.message));
    }, []);

    return (
        <div id="portfolio-section">
            <div className="container-xl">
                <div className="portfoli-heading">
                    <Slide top>
                        <h2>My Portfolio</h2>
                    </Slide>
                </div>
                <div className="portfolio-container">
                    {portfolio.map((portfolio) => (
                        <SinglePortfolio key={portfolio.id} portfolio={portfolio} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
