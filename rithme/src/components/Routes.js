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
<<<<<<< HEAD
import WithNoAuth from "./WithNoAuth";
=======
>>>>>>> cc254d7a54a438d0b985fdc17453f6afe2fff55f

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
<<<<<<< HEAD
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
=======
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
>>>>>>> cc254d7a54a438d0b985fdc17453f6afe2fff55f
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
