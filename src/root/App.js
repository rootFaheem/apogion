import React from "react";
import Header from "../components/header/header";
import "./App.css";
import IndexRoute from "../routes/index.routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="App">
          <Header />
          <IndexRoute />
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
