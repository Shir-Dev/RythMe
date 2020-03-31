import React, { useState } from "react";
import "./assets/styles/login.css";
import Footer from "./Footer";
import Header from "./Header";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";

function Login(props) {
  const [loginObject, setLoginObject] = useState();
  const [redirect, setRedirect] = useState();
  function autoLogin() {
    Axios("http://localhost:3333/users/signin", {
      method: "POST",
      data: loginObject,
      withCredentials: true
    })
      .then(res => {
        if (res.status === 200) {
          console.log("usuario logeado");
          setRedirect(<Redirect to="/bienvenido" />);
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        alert("Usuario o contraseña incorrecta.Inténtelo de nuevo.");
      });
  }
  const formHeader = {
    headerText: "Login",
    srcArrow: "/"
  };
  return (
    <div className="contenedor_g">
      {redirect}
      <Header headerObject={formHeader} />
      <div className="contenedor_login">
        <form className="contenedor_login">
          <h2 className="h2">Iniciar Sesion</h2>
          <input
            type="text"
            placeholder="Nombre de Usuario"
            name="username"
            id="username"
            onChange={$event =>
              setLoginObject({
                ...loginObject,
                username: $event.target.value
              })
            }
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            name="password"
            id="password"
            onChange={$event =>
              setLoginObject({
                ...loginObject,
                password: $event.target.value
              })
            }
            required
          />
          <input
            className="btnContinue"
            type="button"
            value="Continuar"
            name="continue"
            id="continue"
            onClick={autoLogin}
          />
        </form>
        <Link to="/registro" className="registro">
          Registrarme
        </Link>
      </div>
    </div>
  );
}

export default Login;
