import React from "react";
import { Link, useRouteMatch, useParams } from "react-router-dom";
import Routes from "./components/Routes";
import "./App.css";

import Form from "./components/Form.js";
import Bienvenido from "./components/Bienvenido";
import withAuth from "./components/WithAuth";

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
