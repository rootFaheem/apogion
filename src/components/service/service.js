import React from "react";

import ServiceDetails from "./servicesDetails/servicesDetails";

const service = () => {
    return (
        <div>
            <div className="bg-light vh-100 pt-5 ">
                <h1>Service </h1>
                <h3>Please scroll down to see the services in detail: </h3>
            </div>

            <div>
                <ServiceDetails />
            </div>
        </div>
    );
};

export default service;
