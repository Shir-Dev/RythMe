import React from "react";
import "./assets/styles/form.css";
import Header from "./Header";
import Footer from "./Footer";

function Bienvenido() {
  return (
    <div className="">
      <Header />
      <div>
        <h2>Datos Personales</h2>
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
            placeholder="Fecha de Cumpleaños"
            name="birthDay"
            id="birthDay"
            required
          />
          <input
            type="submit"
            value="Continuar"
            name="continue"
            id="continue"
          />
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Bienvenido;
