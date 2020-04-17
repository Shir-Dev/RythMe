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
import withAuth from "./WithAuth";
import WithNoAuth from "./WithNoAuth";
import SincroMusic from "./SincroMusic";
import Comprar from "./Comprar";
import ComprarCarrito from "./ComprarCarrito";
import ForgotPass from "./ForgotPass";
import RecoverPass from "./RecoverPass";
import RecoverGet from "./RecoverGet";

function Routes() {
  console.log(Route);
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/comprarcarrito"
          component={withAuth(ComprarCarrito)}
        />
        <Route exact path="/comprar" component={withAuth(Comprar)} />
        <Route exact path="/sincro" component={withAuth(SincroMusic)} />
        <Route exact path="/confi" component={withAuth(ConfiPerfil)} />
        <Route exact path="/login" component={WithNoAuth(Login)} />
        <Route exact path="/carrito" component={withAuth(Carrito)} />
        <Route exact path="/bienvenido" component={withAuth(Bienvenido)} />
        <Route exact path="/entradas" component={withAuth(Entradas)} />
        <Route exact path="/registro" component={WithNoAuth(Registro)} />
        <Route exact path="/" component={PageInicio} />
        <Route exact path="/buscar" component={withAuth(Buscar)} />
        <Route exact path="/conciertos" component={withAuth(Conciertos)} />
        <Route
          exact
          path="/configuracion"
          component={withAuth(Configuracion)}
        />
        <Route exact path="/forgotPass" component={ForgotPass} />
        <Route exact path="/recoverPass" component={RecoverPass} />
        <Route
          exact
          path="/recoverGet/:token"
          component={RecoverGet(RecoverPass)}
        />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
