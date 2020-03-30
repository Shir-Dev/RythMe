import React, { useState } from "react";
import "./assets/styles/login.css";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";

function Login(props) {
  const [loginObject, setLoginObject] = useState();

  function autoLogin() {
    fetch("http://localhost:3333/users/signin", {
      method: "POST",
      body: JSON.stringify(loginObject),
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status === 200) {
          console.log("usuario logeado");
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
      <Header headerObject={formHeader} />
      <div className="contenedor_login">
        <form
          className="contenedor_login"
          method="post"
          action="http://localhost:3333/users/signup"
        >
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
        <Link to="/form" className="registro">
          Registrarme
        </Link>
      </div>
    </div>
  );
}

export default Login;
