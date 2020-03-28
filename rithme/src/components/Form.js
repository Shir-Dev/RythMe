import React from "react";
import "./assets/styles/form.css";
import Footer from "./Footer";
import Header from "./Header";

function Form() {
  const formHeader = {
    headerText: "Registro",
    srcArrow: "/bienvenido"
  };
  return (
    <div className="contenedor_g">
<<<<<<< HEAD
      <Header />
      <h2 className="parrafo_h2">Datos Personales</h2>
=======
      <Header headerObject={formHeader} />
      <h2 className="h2">Datos Personales</h2>
>>>>>>> 9a6b42188d9ab0bc89b97278623bd5cc692986a3
      <form
        className="contenedor"
        method="post"
        action="http://localhost:3333/users/signup"
      >
        <div className="content_camara">
       <label className="camara_txt" for="Name">Foto de Perfil</label>
       <input className="camara" type="file" id="photo"  accept="image/*"  required/>
      </div>
        <input
          type="text"
          placeholder="Nombre de Usuario"
          name="username"
          id="username"
          required
          className=""
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
          type="date"
          placeholder="F. Cumpleaños 03/07/1998"
          name="birthDay"
          id="birthDay"
          required
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
