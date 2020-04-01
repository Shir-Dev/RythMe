import React, { useState } from "react";
import "./assets/styles/form.css";
import Header from "./Header";

function Form(props) {
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
  return (
    <div className="contenedor_g">
      <Header headerObject={formHeader} />
      <h2 className="h2">Datos Personales</h2>
      <form onSubmit={sendingData} className="contenedor">
        <div className="content_camara">
          <label className="camara_txt" for="Name">
            Foto de Perfil
          </label>
          <input className="camara" name="productImage" type="file" id="photo" accept="image/*" />
        </div>
        <input
          type="text"
          placeholder="Nombre de Usuario"
          name="username"
          id="username"
          minlength="5" maxlength="40"  required
          onChange={$event =>
            setFormObject({ ...formObject, username: $event.target.value })
          }
          className=""
        />
        <input
          type="text"
          placeholder="Escriba su Nombre"
          name="name"
          id="name"
          minlength="2" maxlength="20" required pattern="[A-Za-z0-9]+"
          onChange={$event =>
            setFormObject({ ...formObject, name: $event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Escriba su Apellido"
          name="surname"
          id="surname"
          minlength="8" maxlength="35" required pattern="[A-Za-z0-9]+"
          onChange={$event =>
            setFormObject({ ...formObject, surname: $event.target.value })
          }
        />
        <input
          type="email"
          placeholder="Correo Electronico"
          name="email"
          id="email"
          pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"
          required
          onChange={$event =>
            setFormObject({ ...formObject, email: $event.target.value })
          }
        />
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          id="password"
          pattern="[A-Za-z0-9]+"
          minlength="6" 
          required
          onChange={$event =>
            setFormObject({ ...formObject, password: $event.target.value })
          }
        />
        <input
          type="number"
          placeholder="C.Postal"
          name="zipCode"
          id="zipCode"
          pattern="/^(?:0[1-9]\d{3}|[1-4]\d{4}|5[0-2]\d{3})$/"
          required
          onChange={$event =>
            setFormObject({ ...formObject, zipCode: $event.target.value })
          }
        />
        <input
          type="date"
          placeholder="F. Cumpleaños 03/07/1998"
          name="birthDay"
          id="birthDay"
          max="2003-12-31"
          required
          onChange={$event =>
            setFormObject({ ...formObject, birthDay: $event.target.value })
          }
        />
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
