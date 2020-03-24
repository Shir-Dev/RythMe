import React from "react";
import "./assets/styles/form.css";
import Header from "./Header";
import Footer from "./Footer";

function Form() {
  return (
    <div className="contenedor_g">
      <div>
        <h2 className="h2">Datos Personales</h2>
        <div className="contenedor">
          <input
            type="text"
            placeholder="Nombre de Usuario"
            name="username"
            id="username"
            required
          />
          <input
            type="text"
            placeholder="Escriba su Nombre"
            name="name"
            id="name"
            required
          />
          <input
            type="text"
            placeholder="Escriba su Apellido"
            name="surname"
            id="surname"
            required
          />
          <input
            type="email"
            placeholder="Correo Electronico"
            name="email"
            id="email"
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
            type="number"
            placeholder="C.Postal"
            name="zipCode"
            id="zipCode"
            required
          />
          <input
            type="number"
            placeholder="F. Cumpleaños 03/07/1998"
            name="birthDay"
            id="birthDay"
            required
          />
          <input
            className="btnContinuar"
            type="button"
            value="Continuar"
            name="continue"
            id="continue"
          />
        </div>
        <div className="configurasion">
          <nav>
            <li>
              <a href="/home">HOME</a>
            </li>
          </nav>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Form;
