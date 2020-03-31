import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PageInicio from "./PageInicio";
import Entradas from "./Entradas";
import Carrito from "./Carrito";
import Bienvenido from "./Bienvenido";
import Buscar from "./Buscar";
import Conciertos from "./Conciertos";
import Configuracion from "./Configuracion";
import Login from "./Login";
import Registro from "./Registro";
import ConfiPerfil from "./ConfiPerfil";
import FormMusical from "./FormMusical";
import withAuth from "./WithAuth";
import WithNoAuth from "./WithNoAuth";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/confi" component={withAuth(ConfiPerfil)} />
        <Route exact path="/login" component={WithNoAuth(Login)} />
        <Route exact path="/carrito" component={withAuth(Carrito)} />
        <Route exact path="/bienvenido" component={withAuth(Bienvenido)} />
        <Route exact path="/entradas" component={withAuth(Entradas)} />
        <Route exact path="/registro" component={WithNoAuth(Registro)} />
        <Route exact path="/" component={withAuth(PageInicio)} />
        <Route exact path="/buscar" component={withAuth(Buscar)} />
        <Route exact path="/conciertos" component={withAuth(Conciertos)} />
        <Route
          exact
          path="/configuracion"
          component={withAuth(Configuracion)}
        />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
