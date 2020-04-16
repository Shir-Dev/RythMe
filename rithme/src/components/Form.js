import React, { useState, useRef } from "react";
import "./assets/styles/form.css";
import Header from "./Header";
import subir from "./assets/icons/subir.png";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

function Form(props) {
  const eye = <FontAwesomeIcon icon={faEye} />;
  const { register, errors, handleSubmit, watch } = useForm();
  const [showPass, setShowPass] = useState(false);

  const visiblityPass = () => {
    setShowPass(showPass ? false : true);
  };

  const onSubmit = (data) => {
    console.log(data);
    console.log(props.hola);
    props.takingData(formObject);
  };
  const password = useRef({});
  password.current = watch("password", "");

  var formData = new FormData();
  const [formObject, setFormObject] = useState();

  const formHeader = {
    isArrow: true,
    headerText: "Registro",
    srcArrow: "/login",
  };

  var divStyle = {
    display: "none",
  };
  return (
    <div className="contenedor_g">
      <Header headerObject={formHeader} />

      <form onSubmit={handleSubmit(onSubmit)} className="contenedor">
        <label htmlFor="file-upload" className="subir">
          <img className="icono_subir" src={subir} alt="" />
        </label>
        <input
          type="file"
          style={divStyle}
          accept="image/*"
          id="file-upload"
          onChange={($event) => {
            console.log($event.target.files[0]);
            setFormObject({ ...formObject, userPhoto: $event.target.files[0] });
            formData.append("userPhoto", $event.target.files[0]);
          }}
        />
        <div className="cont_form" id="info"></div>
        <input
          type="text"
          placeholder="Nombre de Usuario"
          name="username"
          id="username"
          onChange={($event) => {
            setFormObject({ ...formObject, username: $event.target.value });
            formData.append("username", $event.target.value);
            console.log(formData);
          }}
          className=""
          ref={register({
            required: {
              value: true,
              message: "Campo requerido",
            },
            maxLength: {
              value: 11,
              message: "Máximo 11 caracteres",
            },
            minLength: {
              value: 3,
              message: "Mínimo 3 caracteres",
            },
          })}
        />
        <div className="msg-error">
          <span>{errors.username && errors.username.message}</span>
        </div>
        <input
          type="text"
          placeholder="Nombre"
          name="username"
          id="name"
          onChange={($event) =>
            setFormObject({ ...formObject, name: $event.target.value })
          }
          className=""
          ref={register({
            required: {
              value: true,
              message: "Campo requerido",
            },
            maxLength: {
              value: 15,
              message: "Máximo 15 caracteres",
            },
            minLength: {
              value: 3,
              message: "Mínimo 3 caracteres",
            },
          })}
        />
        <div className="msg-error">
          <span>{errors.name && errors.name.message}</span>
        </div>
        <input
          type="text"
          placeholder="Apellidos"
          name="surname"
          id="surname"
          onChange={($event) =>
            setFormObject({ ...formObject, surname: $event.target.value })
          }
          ref={register({
            required: {
              value: true,
              message: "Campo requerido",
            },

            minLength: {
              value: 3,
              message: "Mínimo 3 caracteres",
            },
            pattern: {
              value: /^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$/i,
              message: "No se admiten números ni signos",
            },
          })}
        />
        <div className="msg-error">
          <span>{errors.surname && errors.surname.message}</span>
        </div>
        <input
          type="email"
          placeholder="Correo Electrónico"
          name="email"
          id="email"
          onChange={($event) =>
            setFormObject({ ...formObject, email: $event.target.value })
          }
          ref={register({
            required: {
              value: true,
              message: "Campo requerido",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Por favor, ingrese un correo válido",
            },
          })}
        />
        <div className="msg-error">
          <span>{errors.email && errors.email.message}</span>
        </div>
        <input
          type={showPass ? "text" : "password"}
          placeholder="Contraseña"
          name="password"
          id="password"
          onChange={($event) =>
            setFormObject({ ...formObject, password: $event.target.value })
          }
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
        <i onClick={visiblityPass}>{eye}</i>

        <input
          type="password"
          placeholder=" Repita Contraseña"
          name="password2"
          id="password2"
          onChange={($event) =>
            setFormObject({ ...formObject, password: $event.target.value })
          }
          ref={register({
            validate: (value) =>
              value === password.current || "Las contraseñas no coinciden",
          })}
        />
        <div className="msg-error">
          <span>{errors.password2 && <p>{errors.password2.message}</p>}</span>
        </div>

        <input
          type="number"
          placeholder="C.Postal"
          name="zipCode"
          id="zipCode"
          onChange={($event) =>
            setFormObject({ ...formObject, zipCode: $event.target.value })
          }
          ref={register({
            required: {
              value: true,
              message: "Campo requerido",
            },

            minLength: {
              value: 5,
              message: "Mínimo 5 caracteres",
            },
            pattern: {
              value: /^(?:0[1-9]\d{3}|[1-4]\d{4}|5[0-2]\d{3})$/i,
              message: "El C.P debe contener 5 números",
            },
          })}
        />
        <div className="msg-error">
          <span>{errors.zipCode && errors.zipCode.message}</span>
        </div>
        <input
          type="date"
          placeholder="F. Cumpleaños 03/07/1998"
          name="birthDay"
          id="birthDay"
          onChange={($event) =>
            setFormObject({ ...formObject, birthDay: $event.target.value })
          }
          ref={register({
            required: {
              value: true,
              message: "Campo requerido",
            },
            max: {
              value: 31 - 12 - 2003,
              message: "Fecha incorrecta",
            },
          })}
        />
        <div className="msg-error">
          <span>{errors.birthDay && errors.birthDay.message}</span>
        </div>

        <input
          className="btnContinuar"
          type="submit"
          value="Continuar"
          name="continue"
          id="continue"
        />
      </form>
    </div>
  );
}

export default Form;
