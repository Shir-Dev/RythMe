import React, { useState, useEffect } from "react";
import logom from "./assets/icons/avatar.png";
import logop from "./assets/icons/comentario2.png";
import logos from "./assets/icons/usuario.png";
import "./assets/styles/bienvenido.css";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";


function ConfiPerfil(props) { 
  
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:3333/users` &&`http://192.168.1.66:3333/users`)
      .then(res => {console.log(res.data); setDatos(res.data);});}, []);
  console.log(datos.musicalInterest)
  const [formObject, setFormObject] = useState();

  function sendingData(event) {
    event.preventDefault();
    console.log(props.hola);
    props.takingData(formObject);
  }
     

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
   
      <nav className="c__nav">
        <p> {datos.username}</p>
      </nav>
      <hr />
      <div className="datosPersonales">
      <input type="text" name="surname" placeholder={datos.name}  id="surname"required onChange={$event => setFormObject({ ...formObject, surname: $event.target.value })}/>
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

export default ConfiPerfil;
