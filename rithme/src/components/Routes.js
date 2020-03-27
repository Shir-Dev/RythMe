import React from "react";
import { Switch, Route } from "react-router-dom";
import Form from "./Form";
import PageInicio from "./PageInicio";
import Entradas from "./Entradas";
import Bienvenido from "./Bienvenido";
import FormMusical from "./FormMusical";
import Buscar from "./Buscar";
import Conciertos from "./Conciertos";
import Configuracion from "./Configuracion";

function Routes() {
  return (
    <Switch>
      <Route exact path="/bienvenido" component={Bienvenido} />
      <Route exact path="/entradas" component={Entradas} />
      <Route exact path="/formMusical" component={FormMusical} />
      <Route exact path="/form" component={Form} />
      <Route exact path="/" component={PageInicio} />
      <Route exact path="/buscar" component={Buscar} />
      <Route exact path="/conciertos" component={Conciertos} />
      <Route exact path="/configuracion" component={Configuracion} />
    </Switch>
  );
}
export default Routes;
