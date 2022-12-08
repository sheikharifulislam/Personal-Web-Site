import React from "react";
import "./singleSkill.css";

const SingleSkill = ({ skill }) => {
    const { imageUrl, skillName } = skill;

    return (
        <div data-aos="zoom-in-up" data-aos-duration="3000" className="single-skill">
            <div className="single-skill-image">
                <img src={imageUrl} alt="" />
            </div>
            <div className="single-skill-name">
                <p>{skillName}</p>
            </div>
        </div>
    );
};

export default SingleSkill;
