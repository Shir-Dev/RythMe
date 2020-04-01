import React, { useState, useEffect } from "react";
import logo_escribir from "./assets/icons/escribir.png";
import logop from "./assets/icons/comentario2.png";
import logos from "./assets/icons/usuario.png";
import "./assets/styles/confiPerfil.css";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

function ConfiPerfil(props) {
  const [datos, setDatos] = useState([]);
  const [formObject, setFormObject] = useState({});
  const [objectProfile, setObjectProfile] = useState({});

  useEffect(() => {
    setObjectProfile({
      username: <p> {props.user.username} </p>,
      name: <p> {props.user.name} </p>,
      surname: <p>{props.user.surname}</p>,
      birthDay: <p>{props.user.birthDay}</p>,
      zipCode: <p>{props.user.zipCode}</p>
    });
  }, []);

  console.log(datos.musicalInterest);

  function sendingData(event) {
    event.preventDefault();
    console.log(props.hola);
    props.takingData(formObject);
  }
  function changeToInputUsername() {
    setObjectProfile({
      ...objectProfile,
      username: (
        <input
          type="text"
          placeholder={props.user.username}
          onChange={$event => {
            setFormObject({ ...formObject, username: $event.target.value });
            console.log($event.target);
          }}
        ></input>
      )
    });
  }

  function changeToInputName() {
    setObjectProfile({
      ...objectProfile,
      name: (
        <input
          type="text"
          placeholder={props.user.name}
          onChange={$event =>
            setFormObject({ ...formObject, name: $event.target.value })
          }
        ></input>
      )
    });
  }
  function changeToInputSurname() {
    setObjectProfile({
      ...objectProfile,
      surname: (
        <input
          type="text"
          placeholder={props.user.surname}
          onChange={$event =>
            setFormObject({ ...formObject, surname: $event.target.value })
          }
        ></input>
      )
    });
  }
  function changeToInputBirthDay() {
    setObjectProfile({
      ...objectProfile,
      birthDay: (
        <input
          type="text"
          placeholder={props.user.birthDay}
          onChange={$event =>
            setFormObject({ ...formObject, birthDay: $event.target.value })
          }
        ></input>
      )
    });
  }
  function changeToInputZipcode() {
    setObjectProfile({
      ...objectProfile,
      zipCode: (
        <input
          type="text"
          placeholder={props.user.zipCode}
          onChange={$event =>
            setFormObject({ ...formObject, number: $event.target.value })
          }
        ></input>
      )
    });
  }
  const formHeader = {
    isArrow: true,
    headerText: "Configuración",
    srcArrow: "/configuracion"
  };

  return (
    <div className="contenedor_confiperfil">
      <Header headerObject={formHeader} />
      <header className="">
        <p className="bienvenido">Datos de Usuario</p>
      </header>
      <div className="datosPersonales">
        <div>
          {objectProfile.username}
          <button
            className="btn_escri"
            onClick={() => {
              changeToInputUsername();
            }}
          >
            <img className="logo_escribir" src={logo_escribir} />
          </button>
        </div>

        <hr />
        <div>
          {objectProfile.name}
          <button
            className="btn_escri"
            onClick={() => {
              changeToInputName();
            }}
          >
            <img className="logo_escribir" src={logo_escribir} />
          </button>
        </div>
        <div>
          {objectProfile.surname}
          <button
            className="btn_escri"
            onClick={() => {
              changeToInputSurname();
            }}
          >
            <img className="logo_escribir" src={logo_escribir} />
          </button>
        </div>
        <div>
          {objectProfile.birthDay}
          <button
            className="btn_escri"
            onClick={() => {
              changeToInputBirthDay();
            }}
          >
            <img className="logo_escribir" src={logo_escribir} />
          </button>
        </div>
        <div>
          {objectProfile.zipCode}
          <button
            className="btn_escri"
            onClick={() => {
              changeToInputZipcode();
            }}
          >
            <img className="logo_escribir" src={logo_escribir} />
          </button>
        </div>
      </div>
      <hr />
      <footer>
        <Footer changeNav="confi" />
      </footer>
    </div>
  );
}

export default ConfiPerfil;
