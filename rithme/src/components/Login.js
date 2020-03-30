import React from "react";
import "./assets/styles/login.css";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";

function Login() {
  const formHeader = {
    headerText: "Login",
    srcArrow: "/bienvenido"
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
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            name="password"
            id="password"
            required
          />
          <input
            className="btnContinue"
            type="submit"
            value="Continuar"
            name="continue"
            id="continue"
          />
        </form>
        <Link to="/form" className="registro">Registrarme</Link>
      </div>
    </div>
  );
}

export default Login;
