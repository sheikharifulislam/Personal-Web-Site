import React from "react";
import { NavLink } from "react-router-dom";
import file from "../../files/Sheikh Ariful Islam_Resume.pdf";
import logo from "../../images/logo.png";
import "./navBar.css";

const NavBar = () => {
    return (
        <div id="style-nav-bar">
            <div className="container">
                <div className="nav-bar-container">
                    <div className="logo">
                        <NavLink to="/">
                            <img src={logo} alt="" />
                        </NavLink>
                    </div>
                    <div className="menu">
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to="/home">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/all-blogs">Blogs</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact">Contact</NavLink>
                                </li>
                                <li>
                                    <button id="download-btn">
                                        <a href={file} target="_blank" download rel="noreferrer">
                                            <i class="fa fa-download" />
                                            Download Resume
                                        </a>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
