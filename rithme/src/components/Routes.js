import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Form from "./Form";
import PageInicio from "./PageInicio";
import Entradas from "./Entradas";
import Bienvenido from "./Bienvenido";
import FormMusical from "./FormMusical";
import Buscar from "./Buscar";
import Conciertos from "./Conciertos";
import Configuracion from "./Configuracion";
import Login from "./Login";
import Registro from "./Registro";
import ConfiPerfil from "./ConfiPerfil";
import CheckAuth from "./CheckAuth";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/confi" component={ConfiPerfil} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/bienvenido" component={CheckAuth("Bienvenido")} />
        <Route exact path="/entradas" component={Entradas} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/" component={PageInicio} />
        <Route exact path="/buscar" component={Buscar} />
        <Route exact path="/conciertos" component={Conciertos} />
        <Route exact path="/configuracion" component={Configuracion} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
