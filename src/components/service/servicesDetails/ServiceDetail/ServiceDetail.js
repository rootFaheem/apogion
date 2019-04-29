import React from "react";

import Cat from "../../../../assetsts/images/serviceDetail/ServiceDetail/cat.jpg";
import Minions from "../../../../assetsts/images/serviceDetail/ServiceDetail/minions.jpg";
import Smiley from "../../../../assetsts/images/serviceDetail/ServiceDetail/smiley.jpg";

import "./ServiceDetail.css";

const serviceDetail = props => {
    let list1 = null;
    if (props.data.subParaBody) {
        list1 = props.data.subParaBody.map(item => {
            return <li className="text-left">{item}</li>;
        });
    }

    let list2 = props.data.subHeader1Body.map(item => {
        return <li className="list-inline-item">&bull; {item}</li>;
    });
    let list3 = props.data.subHeader2Body.map(item => {
        return <li className="list-inline-item">&bull; {item}</li>;
    });

    return (
        <div>
            <div className="row mt-5">
                <div className="col-5 pl-5">
                    <div
                        id="carouselExampleIndicators"
                        className="carousel slide"
                        data-ride="carousel"
                    >
                        <ol className="carousel-indicators">
                            <li
                                data-target="#carouselExampleIndicators"
                                data-slide-to="0"
                                className="active"
                            />
                            <li
                                data-target="#carouselExampleIndicators"
                                data-slide-to="1"
                            />
                            <li
                                data-target="#carouselExampleIndicators"
                                data-slide-to="2"
                            />
                        </ol>
                        <div
                            className="carousel-inner"
                            style={{
                                border: "1px solid #000",
                                borderRadius: "4px"
                            }}
                        >
                            <div className="carousel-item active">
                                <img
                                    className="d-block w-100"
                                    src={Cat}
                                    alt="First slide"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    className="d-block w-100"
                                    src={Minions}
                                    alt="Second slide"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    className="d-block w-100"
                                    src={Smiley}
                                    alt="Third slide"
                                />
                            </div>
                        </div>
                        <a
                            className="carousel-control-prev"
                            href="#carouselExampleIndicators"
                            role="button"
                            data-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            />
                            <span className="sr-only">Previous</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#carouselExampleIndicators"
                            role="button"
                            data-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            />
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div className="col text-left ">
                    <h4 className="font-weight-bold ">{props.data.header}</h4>
                    <p className="pl-1">{props.data.body}</p>
                    <div className="text-left">{props.data.subPara}</div>
                    <div>
                        <ul>{list1}</ul>
                    </div>
                    <div>
                        <h5>{props.data.subHeader1}</h5>
                    </div>
                    <div className="row">
                        <div className="col col-auto">
                            <ul className="list-inline">{list2}</ul>
                        </div>
                    </div>
                    <div>
                        <h5>{props.data.subHeader2}</h5>
                    </div>
                    <div className="row">
                        <div className="col col-auto">
                            <ul className="list-inline">{list3}</ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default serviceDetail;
