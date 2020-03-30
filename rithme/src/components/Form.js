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
    headerText: "Registro",
    srcArrow: "/bienvenido"
  };
  return (
    <div className="contenedor_g">
      <Header headerObject={formHeader} />
      <h2 className="h2">Datos Personales</h2>
      <a name="#login.js"></a>
      <form
        onSubmit={sendingData}
        className="contenedor"
        method="post"
        action="http://localhost:3333/users/signup"
      >
        <div className="content_camara">
          <label className="camara_txt" for="Name">
            Foto de Perfil
          </label>
          <input className="camara" type="file" id="photo" accept="image/*" />
        </div>
        <input
          type="text"
          placeholder="Nombre de Usuario"
          name="username"
          id="username"
          //required
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
          //required
          onChange={$event =>
            setFormObject({ ...formObject, name: $event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Escriba su Apellido"
          name="surname"
          id="surname"
          //required
          onChange={$event =>
            setFormObject({ ...formObject, surname: $event.target.value })
          }
        />
        <input
          type="email"
          placeholder="Correo Electronico"
          name="email"
          id="email"
          //required
          onChange={$event =>
            setFormObject({ ...formObject, email: $event.target.value })
          }
        />
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          id="password"
          //required
          onChange={$event =>
            setFormObject({ ...formObject, password: $event.target.value })
          }
        />
        <input
          type="number"
          placeholder="C.Postal"
          name="zipCode"
          id="zipCode"
          //required
          onChange={$event =>
            setFormObject({ ...formObject, number: $event.target.value })
          }
        />
        <input
          type="date"
          placeholder="F. Cumpleaños 03/07/1998"
          name="birthDay"
          id="birthDay"
          //required
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
