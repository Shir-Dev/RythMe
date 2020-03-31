import React, { useState, useEffect } from "react";
import logom from "./assets/icons/avatar.png";
import "./assets/styles/bienvenido.css";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

function Bienvenido() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3333/users`).then(res => {
      console.log(res.data);
      setDatos(res.data);
    });
  }, []);
  console.log(datos.musicalInterest);

  const formHeader = {
    headerText: "Home"
  };

  return (
    <div>
      <div className="contenedor-welcome">
        <Header headerObject={formHeader} />
        <header className="">
          <h1 className="welcome">¡Bienvenido!</h1>
        </header>
        <div className="c__img">
          <img src={logom} className="logo_profile" />
        </div>
        <div className="profileBody">
          <h2> {datos.username}</h2>
          <div className="personal-data">
            <label className="label-class"> Nombre:</label>
            <label className="label-data"> {datos.name}</label>
            <label className="label-class"> Apellidos:</label>
            <label className="label-data"> {datos.surname}</label>
            <label className="label-class"> Cumpleaños:</label>
            <label className="label-data">{datos.birthDay}</label>
            <label className="label-class"> Código Postal:</label>
            <label className="label-data">{datos.zipCode}</label>
          </div>
        </div>
      </div>
      <footer>
        <Footer changeNav="home" />
      </footer>
    </div>
  );
}
export default Bienvenido;
