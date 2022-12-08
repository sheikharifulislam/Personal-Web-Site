import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./porttfolioDetails.css";

const PortfolioDetails = () => {
    const { portfolioDetailsId } = useParams();

    const [portfolioDetails, setportfolioDetails] = useState([]);
    useEffect(() => {
        fetch("/portfolioData.json")
            .then((response) => response.json())
            .then((data) => setportfolioDetails(data))
            .catch((error) => console.log(error.message));
    }, []);

    const singleportfolioData = portfolioDetails.find((data) => data.id === portfolioDetailsId);

    return (
        <div id="portfolio-details-section">
            <div className="portfolio-details-heading">
                <h2>Portfolio Details</h2>
            </div>
            <div className="container">
                <div className="portfolio-details-container">
                    <div className="portfolio-details-image">
                        <img src={singleportfolioData?.portfolioDetailsImage} alt="" />
                    </div>
                    <div className="portfolio-details">
                        <div className="portfolio-name">
                            <h2>WebSite Name: {singleportfolioData?.webSiteName}</h2>
                        </div>
                        <div className="portfolio-summary">
                            <h4>Short Summary: </h4>
                            <ul>
                                {singleportfolioData?.summary.map((singleSummary) => (
                                    <li key={singleSummary}>{singleSummary}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="used-technology">
                            <h4>Used Technology: </h4>
                            <ul>
                                {singleportfolioData?.usedTechnology.map((singleTechnology) => (
                                    <li>{singleTechnology}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetails;
