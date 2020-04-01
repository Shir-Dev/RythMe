import React, { useState } from "react";
import "./assets/styles/form.css";
import Header from "./Header";
import subir from "./assets/icons/subir.png";
import { useForm } from "react-hook-form";

function Form(props) {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  const [formObject, setFormObject] = useState();

  function sendingData(event) {
    event.preventDefault();
    console.log(props.hola);
    props.takingData(formObject);
  }
  const formHeader = {
    isArrow: true,
    headerText: "Registro",
    srcArrow: "/login"
  };
  function cambiar() {
    var pdrs = document.getElementById("file-upload").files[0].name;
    document.getElementById("info").innerHTML = pdrs;
  }
  var divStyle = {
    display: "none"
  };
  return (
    <div className="contenedor_g">
      <Header headerObject={formHeader} />
      <h2 className="h2">Datos Personales</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="contenedor">
        <label for="file-upload" className="subir">
          <img className="icono_subir" src={subir} alt="" />
        </label>
        <input
          id="file-upload"
          name="productImage"
          /*onchange="cambiar()"*/
          accept="image/*"
          type="file"
          style={divStyle}
        />
        <div className="cont_form" id="info"></div>

        <input
          type="text"
          placeholder="Nombre de Usuario"
          name="username"
          id="username"
          onChange={$event =>
            setFormObject({ ...formObject, username: $event.target.value })
          }
          className=""
          ref={register({
            required: {
              value: true,
              message: "Campo requerido"
            },
            maxLength: {
              value: 11,
              message: "Máximo 11 caracteres"
            },
            minLength: {
              value: 3,
              message: "Mínimo 4 caracteres"
            }
          })}
        />
        <div className="msg-error">
          <span>{errors.username && errors.username.message}</span>
        </div>
        <input
          type="text"
          placeholder="Escriba su Apellido"
          name="surname"
          id="surname"
          onChange={$event =>
            setFormObject({ ...formObject, surname: $event.target.value })
          }
          ref={register({
            required: {
              value: true,
              message: "Campo requerido"
            },

            minLength: {
              value: 3,
              message: "Mínimo 3 caracteres"
            },
            pattern: {
              value: /^[A-Za-z ]+$/i,
              message: "No se admiten números ni signos"
            }
          })}
        />
        <div className="msg-error">
          <span>{errors.surname && errors.surname.message}</span>
        </div>
        <input
          type="email"
          placeholder="Correo Electronico"
          name="email"
          id="email"
          onChange={$event =>
            setFormObject({ ...formObject, email: $event.target.value })
          }
          ref={register({
            required: {
              value: true,
              message: "Campo requerido"
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Por favor, ingrese un correo válido"
            }
          })}
        />
        <div className="msg-error">
          <span>{errors.email && errors.email.message}</span>
        </div>
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          id="password"
          onChange={$event =>
            setFormObject({ ...formObject, password: $event.target.value })
          }
          ref={register({
            required: {
              value: true,
              message: "Campo requerido"
            },

            minLength: {
              value: 8,
              message: "Mínimo 8 caracteres"
            },
            pattern: {
              value: /^[a-zA-Z0-9_]+$/i
            }
          })}
        />
        <div className="msg-error">
          <span>{errors.password && errors.password.message}</span>
        </div>
        <input
          type="number"
          placeholder="C.Postal"
          name="zipCode"
          id="zipCode"
          onChange={$event =>
            setFormObject({ ...formObject, zipCode: $event.target.value })
          }
          ref={register({
            required: {
              value: true,
              message: "Campo requerido"
            },

            minLength: {
              value: 5,
              message: "Mínimo 5 caracteres"
            },
            pattern: {
              value: /^(?:0[1-9]\d{3}|[1-4]\d{4}|5[0-2]\d{3})$/i,
              message: "El C.P debe contener 5 números"
            }
          })}
        />
        <div className="msg-error">
          <span>{errors.zipCode && errors.zipCode.message}</span>
        </div>
        <div className="msg-error">
          <span>{errors.password && errors.password.message}</span>
        </div>
        <input
          type="date"
          placeholder="F. Cumpleaños 03/07/1998"
          name="birthDay"
          id="birthDay"
          onChange={$event =>
            setFormObject({ ...formObject, birthDay: $event.target.value })
          }
          ref={register({
            required: {
              value: true,
              message: "Campo requerido"
            },
            max: {
              value: 31 - 12 - 2003,
              message: "Fecha incorrecta"
            }
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
