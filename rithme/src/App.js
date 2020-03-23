import React from "react";
import { Link, useRouteMatch, useParams } from "react-router-dom";
import Routes from "./components/Routes";

import Form from "./components/Form.js";

function App() {
  return (
    <div className="">
      <Form />
      <Routes></Routes>
    </div>
  );
}

export default App;
