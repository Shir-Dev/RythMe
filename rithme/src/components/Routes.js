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

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/configuracion2" component={ConfiPerfil} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/carrito" component={Carrito} />
        <Route path="/bienvenido" component={withAuth(Bienvenido)} />
        <Route exact path="/entradas" component={Entradas} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/registro2" component={FormMusical} />
        <Route exact path="/" component={PageInicio} />
        <Route exact path="/buscar" component={Buscar} />
        <Route exact path="/conciertos" component={Conciertos} />
        <Route exact path="/configuracion" component={Configuracion} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
