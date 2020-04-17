import React, { useState, useRef } from "react";
import "./assets/styles/login.css";
import Header from "./Header";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

function Login(props) {
  const eye = <FontAwesomeIcon icon={faEye} />;
  const { watch } = useForm();
  const [showPass, setShowPass] = useState(false);
  const [loginObject, setLoginObject] = useState();
  const [redirect, setRedirect] = useState();
  const [errorLogin, setErrorLogin] = useState();
  const visiblityPass = () => {
    setShowPass(showPass ? false : true);
  };
  const password = useRef({});
  password.current = watch("password", "");
  function autoLogin() {
    Axios("http://localhost:3333/users/signin", {
      method: "POST",
      data: loginObject,
      withCredentials: true,
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("email correcto");
          setRedirect(<Redirect to="/bienvenido" />);
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.error(err);
        setErrorLogin(
          <p className="badUser">Contraseña o usuario incorrecto.</p>
        );
      });
  }
  const formHeader = {
    headerText: "Login",
    srcArrow: "/",
  };
  return (
    <div className="contenedor_g">
      {redirect}
      <Header headerObject={formHeader} />
      <div className="contenedor_login">
        <form className="contenedor_login">
          <div className="h2">
            <h2>Iniciar Sesión</h2>
          </div>
          <div className="divUser">
            <input
              type="text"
              placeholder=" Nombre de Usuario"
              name="username"
              id="username"
              onChange={($event) =>
                setLoginObject({
                  ...loginObject,
                  username: $event.target.value,
                })
              }
              required
            />
          </div>
          <div className="divPass">
            <input
              type={showPass ? "text" : "password"}
              placeholder=" Contraseña"
              name="password"
              id="password"
              onChange={($event) =>
                setLoginObject({
                  ...loginObject,
                  password: $event.target.value,
                })
              }
              required
            />
            <div className="eye" onClick={visiblityPass}>
              {eye}
            </div>
          </div>
          {errorLogin}
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
        <div className="forgot2">
          <Link to="/forgotPass" className="forgot">
            ¿Ha olvidado la contraseña?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
