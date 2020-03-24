import React from "react";
import { Switch, Route } from "react-router-dom";
import Form from "./Form";
import Entradas from "./Entradas";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Form} />
      <Route exact path="/home" component={Entradas} />
    </Switch>
  );
}
export default Routes;
