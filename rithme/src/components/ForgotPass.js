import React, { useState } from "react";
import Header from "./Header";
import "./assets/styles/forgotPass.css";
import Axios from "axios";
import { Link, Redirect } from "react-router-dom";

function ForgotPass(props) {
  const [email, setEmail] = useState();
  const [redirect, setRedirect] = useState();
  const [messageUser, setMessageUser] = useState();

  const formHeader = {
    isArrow: true,
    headerText: "Recuperar contraseña",
    srcArrow: "/login",
  };
  function recoverPass() {
    Axios("http://localhost:3333/users/forgotpass", {
      method: "POST",
      data: { email },
    })
      .then((res) => {
        if (res.status === 200) {
          setMessageUser(
            <p className="goodEmail">Se ha enviado un email a su correo</p>
          );
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.error(err);
        setMessageUser(
          <p className="badEmail">La dirección de correo no existe</p>
        );
      });
  }

  return (
    <>
      <Header headerObject={formHeader} />
      <form className="contenedor_forgot-inner">
        <div>
          <label className="emailForgot">Dirección email:</label>
        </div>
        <input
          className="correo2"
          type="email"
          placeholder="Correo Electrónico"
          name="email"
          id="email"
          onChange={($event) => setEmail($event.target.value)}
        />
        {messageUser}
        <div className="forgotButton">
          <input
            className="btnSend"
            type="button"
            value="Enviar"
            name="continue"
            id="continue"
            onClick={recoverPass}
          />
        </div>
      </form>
    </>
  );
}

export default ForgotPass;
