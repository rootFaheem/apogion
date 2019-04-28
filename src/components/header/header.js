import React from "react";
import "./header.css";
import NavLink from "react-router-dom/NavLink";
import logo from "../../../src/assetsts/images/download.jpeg";

const header = () => {
    return (
        <div>
            <div className="apogian_parent">
                <div className="container-fluid">
                    <div className="row">
                        <div className="header_parent">
                            <header>
                                <div className="header">
                                    <div className="header_child col-md-10">
                                        <div className="row">
                                            <div className="logo col-md-5">
                                                <div className="row">
                                                    <img
                                                        src={logo}
                                                        alt="logo"
                                                    />
                                                </div>
                                            </div>
                                            <div className="nav col-md-7">
                                                <div className="row">
                                                    <nav className="navList">
                                                        <ul>
                                                            <li>
                                                                <NavLink
                                                                    activeClassName="activeLink"
                                                                    className="my_link"
                                                                    to="/home"
                                                                >
                                                                    Home
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    activeClassName="activeLink"
                                                                    className="my_link"
                                                                    to="/about"
                                                                >
                                                                    About Us
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    activeClassName="activeLink"
                                                                    className="my_link"
                                                                    to="/service"
                                                                >
                                                                    Services
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    activeClassName="activeLink"
                                                                    className="my_link"
                                                                    to="/portfolio"
                                                                >
                                                                    Portfolio
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    activeClassName="activeLink"
                                                                    className="my_link"
                                                                    to="/contact"
                                                                >
                                                                    Contact
                                                                </NavLink>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                    <div className="social_icons">
                                                        <ul>
                                                            <li>
                                                                <i className="fa fa-facebook" />
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-instagram" />
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-facebook" />
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-linkedin" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </header>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default header;
