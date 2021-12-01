import React, { useState,useEffect } from 'react';
import SingleSkill from '../singleSkill/SingleSkill';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import './skills.css';
AOS.init();

const Skills = () => {
    
    const [allSkills, setAllSkills] = useState([]);
    useEffect(() => {
        fetch('/skillsData.json')
        .then((response) => response.json())
        .then((data) => setAllSkills(data))
        .catch((error) => console.log(error.message))
    },[])

    return (
        <div id="skills-section">
            <div className="container-xl">
                <div className="skills-section-header">
                    <h2 data-aos="fade-down" data-aos-duration="2000">My Skills</h2>
                </div>
                <div className="all-skills-container">
                    {
                        allSkills.map((skill) => <SingleSkill key={skill.id} skill={skill} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Skills;