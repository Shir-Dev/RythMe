import React, { useState, useRef } from "react";
import Header from "./Header";
import "./assets/styles/forgotPass.css";
import Axios from "axios";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";

function RecoverPass(props) {
  const [email, setEmail] = useState();
  const { register, errors, handleSubmit, watch } = useForm();
  const [redirect, setRedirect] = useState();

  const password = useRef({});
  password.current = watch("password", "");

  const formHeader = {
    headerText: "Restablecer contraseña",
  };
  /*function recoveringPass() {
    Axios("http://localhost:3333/users/", {
      method: "POST",
      data: loginObject,
      withCredentials: true,
    })
      .then((res) => {
        if (res.status === 200) {
          
          setRedirect(<Redirect to="/login" />);
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.error(err);
       });
  }
*/
  return (
    <div className="contenedor_g">
      <Header headerObject={formHeader} />

      <form className="contenedorRecover">
        <div className="msg-error">
          <span>{errors.email && errors.email.message}</span>
        </div>
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          id="password"
          /* onChange={($event) =>
            setFormObject({ ...formObject, password: $event.target.value })
          }*/
          ref={register({
            required: {
              value: true,
              message: "Campo requerido",
            },

            minLength: {
              value: 8,
              message: "Mínimo 8 caracteres",
            },
            pattern: {
              value: /^[a-zA-Z0-9_]+$/i,
            },
          })}
        />
        <div className="msg-error">
          <span>{errors.password && errors.password.message}</span>
        </div>
        <input
          type="password"
          placeholder=" Repita Contraseña"
          name="password2"
          id="password2"
          /* onChange={($event) =>
            setFormObject({ ...formObject, password: $event.target.value })
          }*/
          ref={register({
            validate: (value) =>
              value === password.current || "Las contraseñas no coinciden",
          })}
        />
        <div className="msg-error">
          <span>{errors.password2 && <p>{errors.password2.message}</p>}</span>
        </div>
        <input
          className="btnAceptar"
          type="submit"
          value="Aceptar"
          name="continue"
          id="continue"
        />
      </form>
    </div>
  );
}

export default RecoverPass;
