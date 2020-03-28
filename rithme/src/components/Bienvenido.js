import React, { useState, useEffect } from "react";
import logom from "./assets/icons/avatar.png";
import logop from "./assets/icons/comentario2.png";
import logos from "./assets/icons/usuario.png";
import "./assets/styles/bienvenido.css";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

function Bienvenido() {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3333/users` && `http://192.168.1.66:3333/users`)
      .then(res => {
        console.log(res.data);
        setDatos(res.data);
      });
  }, []);
  console.log(datos.musicalInterest);

  const formHeader = {
    headerText: "Home",
    srcArrow: ""
  };
  return (
    <div className="contenedor">
      <Header headerObject={formHeader} />
      <header className="">
        <p className="bienvenido">¡Bienvenido!</p>
      </header>
      <div className="c__img">
        <img src={logop} className="logo_p " />
        <img src={logom} className="logo_g" />
        <img src={logos} className="logo_p" />
      </div>
      <nav className="c__nav">
        <p> {datos.username}</p>
      </nav>
      <hr />
      <div className="datosPersonales">
        <p> {datos.name}</p>
        <p> {datos.surname}</p>
        <p>{datos.birthDay}</p>
        <p>{datos.zipCode}</p>
      </div>
      <hr />
      <div className="tusGustos">
        <p>TUS GUSTOS</p>
        <p className="musicalInteres">{datos.musicalInterest}</p>
      </div>
      <hr />
      <footer>
        <Footer changeNav="home" />
      </footer>
    </div>
  );
}

export default Bienvenido;
