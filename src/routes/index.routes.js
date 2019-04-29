import React from "react";
import Switch from "react-router-dom/Switch";
import Route from "react-router-dom/Route";
import Redirect from "react-router-dom/Redirect";
import Home from "../components/home/home";
import About from "../components/about/about";

import Service from "../components/service/service";
import Portfolio from "../components/portfolio/portfolio";
import Contact from "../components/contact/contact";

const IndexRoute = () => {
    return (
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} /> service
            <Route exact path="/services" component={Service} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Redirect to="/home" />
        </Switch>
    );
};
export default IndexRoute;
