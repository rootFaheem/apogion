import React from "react";

import ServiceDetail from "./ServiceDetail/ServiceDetail";
import JsonData from "./serviceDetails.json";

import "./servicesDetails.css";

export default function servicesDetail() {
    console.log(JsonData);
    return (
        <div style={{ overflow: "scroll", maxWidth: "100%" }}>
            <div>
                <div className="background" />
                <div className="text-center h3 mt-3" id="BrandHeader">
                    BRAND CREATION
                </div>
                <div className="text-left font-weight-light" id="BrandHeader">
                    <p className="mt-4 mr-5 ml-5 ">
                        Wow! Congrats if you are reading this. That means you
                        have taken the plunge and are ready to start and grow
                        your own business. It can be daunting when it comes to
                        starting or developing your business model and brand.
                        <br /> We help you create your brand with trust, while
                        also entertaining and educating your consumers about
                        what you do and why you do it. Define your audience,
                        Differentiate your brand from your competitors, Optimize
                        and promote.
                    </p>
                </div>
                <div className="font-weight-bold mt-4" id="BrandHeader">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col col-auto ">
                                <ul>
                                    <li>Brand Identity Design</li>
                                </ul>
                            </div>
                            <div className="col col-auto">
                                <ul>
                                    <li> Retail Store Branding</li>
                                </ul>
                            </div>
                            <div className="col col-auto">
                                <ul>
                                    <li> Marketing & Promotional Branding</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ServiceDetail data={JsonData} />
            </div>
        </div>
    );
}
