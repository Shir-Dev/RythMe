import React, { useState, useRef } from "react";
import Header from "./Header";
import "./assets/styles/recoverPass.css";
import Axios from "axios";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";

function RecoverPass2(props) {
  const { register, errors, handleSubmit, watch } = useForm();
  const [redirect, setRedirect] = useState();
  const [recoverObject, setRecoverObject] = useState();

  const onSubmit = (data) => {
    console.log(data);
    //props.gettingData(recoverObject);
  };

  const password = useRef({});
  password.current = watch("password", "");

  const formHeader = {
    headerText: "Restablecer contraseña",
  };

  function recoveringPass() {
    Axios("http://localhost:3333/users/recoverpass", {
      method: "POST",
      data: { password: password.current, iD: props.user._id },
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

  return (
    <div className="contenedor_gr">
      <Header headerObject={formHeader} />
      <div className="contenedor_recover">
        <form onSubmit={handleSubmit(onSubmit)} className="contenedorRecover">
          <div className="msg-error">
            <span>{errors.email && errors.email.message}</span>
          </div>
          <div className="divPass1">
            <input
              type="password"
              placeholder="Contraseña"
              name="password"
              id="password"
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
          </div>
          <div className="msg-error2">
            <span>{errors.password && errors.password.message}</span>
          </div>
          <div className="divPass2">
            <input
              type="password"
              placeholder=" Repita Contraseña"
              name="password3"
              id="password3"
              ref={register({
                validate: (value) =>
                  value === password.current || "Las contraseñas no coinciden",
              })}
            />
          </div>
          <div className="msg-error2">
            <span>{errors.password3 && <p>{errors.password3.message}</p>}</span>
          </div>
          <input
            className="btnAceptar"
            type="submit"
            value="Aceptar"
            name="continue"
            id="continue"
            onClick={recoveringPass}
          />
        </form>
      </div>
    </div>
  );
}

export default RecoverPass2;
