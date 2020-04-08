import React, { useState, useEffect } from "react";
import "./assets/styles/bienvenido.css";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import { dateFix } from "./dateFixer";

function Bienvenido(props) {
  console.log(props.user);
  const formHeader = {
    headerText: "Home",
  };
  console.log(props.user.urlImage);
  const birthDay = dateFix(props.user.birthDay);
  return (
    <div>
      <div className="contenedor-welcome">
        <Header headerObject={formHeader} />
        <header className="">
          <h1 className="welcome">¡Bienvenido!</h1>
        </header>
        <div className="c__img">
          <img src={props.user.urlImage} className="logo_profile" />
        </div>
        <div className="profileBody">
          <h2> {props.user.username}</h2>
          <div className="personal-data">
            <label className="label-class"> Nombre:</label>
            <label className="label-data"> {props.user.name}</label>
            <label className="label-class"> Apellidos:</label>
            <label className="label-data"> {props.user.surname}</label>
            <label className="label-class"> Cumpleaños:</label>
            <label className="label-data">{birthDay}</label>
            <label className="label-class"> Código Postal:</label>
            <label className="label-data">{props.user.zipCode}</label>
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
