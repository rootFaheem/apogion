import React from "react";
import ServiceDetails from "./servicesDetails/servicesDetails";

import "./service.css";
import services from "../../assetsts/images/services1_2.png";
const service = () => {
    return (
        <div>
            <div className="apogian_services col-md-12 vh-100">
                <h3>Our Services</h3>
                <div className="row">
                    <div className="services_child_01 col-md-12">
                        <div className="row">
                            <div className="brand col-md-3">
                                <a href="#Brand">
                                    <img src={services} alt="service_img" />
                                    <div className="brand_text col-md-12">
                                        <p>BRAND CREATION</p>
                                    </div>
                                </a>
                            </div>
                            <div className="brand col-md-3">
                                <a href="#Brand">
                                    <img src={services} alt="service_img" />
                                    <div className="brand_text col-md-12">
                                        <p>FASHION DESIGN</p>
                                    </div>
                                </a>
                            </div>
                            <div className="brand col-md-3">
                                <a href="#Brand">
                                    <img src={services} alt="service_img" />
                                    <div className="brand_text col-md-12">
                                        <p>TEXTILE DESIGNING</p>
                                    </div>
                                </a>
                            </div>
                            <div className="brand col-md-3">
                                <a href="#Brand">
                                    <img src={services} alt="service_img" />
                                    <div className="brand_text col-md-12">
                                        <p>PACKAGING DESIGN</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="services_child_01 col-md-12">
                        <div className="row">
                            <div className="brand col-md-3">
                                <a href="#Brand">
                                    <img src={services} alt="service_img" />
                                    <div className="brand_text col-md-12">
                                        <p>BRAND CREATION</p>
                                    </div>
                                </a>
                            </div>
                            <div className="brand col-md-3">
                                <a href="#Brand">
                                    <img src={services} alt="service_img" />
                                    <div className="brand_text col-md-12">
                                        <p>FASHION DESIGN</p>
                                    </div>
                                </a>
                            </div>
                            <div className="brand col-md-3">
                                <a href="#Brand">
                                    <img src={services} alt="service_img" />
                                    <div className="brand_text col-md-12">
                                        <p>TEXTILE DESIGNING</p>
                                    </div>
                                </a>
                            </div>
                            <div className="brand col-md-3">
                                <a href="#Brand">
                                    <img src={services} alt="service_img" />
                                    <div className="brand_text col-md-12">
                                        <p>PACKAGING DESIGN</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ServiceDetails />
        </div>
    );
};

export default service;
