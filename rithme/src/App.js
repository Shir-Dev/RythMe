import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Form from "./components/Form.js";

function App() {
  return (
    <div className="">
      <Form />
    </div>
  );
}

export default App;
