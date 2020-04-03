import React, { useState, useEffect } from "react";
import logo_escribir from "./assets/icons/escribir.png";
import "./assets/styles/confiPerfil.css";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { dateFix } from "./dateFixer";

function ConfiPerfil(props) {
  const [datos, setDatos] = useState([]);
  const [formObject, setFormObject] = useState({});
  const [objectProfile, setObjectProfile] = useState({});

  useEffect(() => {
    setObjectProfile({
      username: <p> {props.user.username} </p>,
      name: <p> {props.user.name} </p>,
      surname: <p>{props.user.surname}</p>,
      birthDay: <p>{dateFix(props.user.birthDay)}</p>,
      zipCode: <p>{props.user.zipCode}</p>
    });
  }, []);

  console.log(datos.musicalInterest);

  function sendingData(event) {
    event.preventDefault();
    let updatedUser = props.user;
    const arrayFields = ["username", "name", "surname", "birthDay", "zipCode"];
    for (let field of arrayFields) {
      if (formObject[field]) updatedUser[field] = formObject[field];
    }
    console.log(updatedUser);
    axios("http://localhost:3333/profiles/edit", {
      method: "PUT",
      data: updatedUser
    })
      .then(res => {
        console.log(res.status);
        if (res.status === 200) {
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        alert("Error al Updatear");
      });
  }

  function changeToInputName() {
    setObjectProfile({
      ...objectProfile,
      name: (
        <>
          <input
            type="text"
            placeholder={props.user.name}
            onChange={$event =>
              setFormObject({ ...formObject, name: $event.target.value })
            }
          ></input>
        </>
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
          type="date"
          placeholder={props.user.birthDay.slice(0, 10)}
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
            setFormObject({ ...formObject, zipCode: $event.target.value })
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
    <>
      <div className="contenedor_confiperfil">
        <Header headerObject={formHeader} />

        <header className="">
          <p className="bienvenido">Datos de Usuario</p>
        </header>
        <div className="profileBody">
          <form onSubmit={sendingData}>
            <div className="datosPersonales">
              <label> Usuario</label>
              <b>
                {" "}
                <div className="div-to-edit">{objectProfile.username}</div>
              </b>
              <label> Nombre</label>
              <div className="div-to-edit">
                {objectProfile.name}
                <button
                  type="button"
                  className="btn_escri"
                  onClick={() => {
                    changeToInputName();
                  }}
                >
                  <img className="logo_escribir" src={logo_escribir} />
                </button>
              </div>
              <label> Apellidos</label>
              <div className="div-to-edit">
                {objectProfile.surname}
                <button
                  type="button"
                  className="btn_escri"
                  onClick={() => {
                    changeToInputSurname();
                  }}
                >
                  <img className="logo_escribir" src={logo_escribir} />
                </button>
              </div>
              <label> Fecha de nacimiento</label>
              <div className="div-to-edit">
                {objectProfile.birthDay}
                <button
                  type="button"
                  className="btn_escri"
                  onClick={() => {
                    changeToInputBirthDay();
                  }}
                >
                  <img className="logo_escribir" src={logo_escribir} />
                </button>
              </div>
              <label> Código postal</label>
              <div className="div-to-edit">
                {objectProfile.zipCode}
                <button
                  type="button"
                  className="btn_escri"
                  onClick={() => {
                    changeToInputZipcode();
                  }}
                >
                  <img className="logo_escribir" src={logo_escribir} />
                </button>
              </div>

              <button className="updateButton">Actualizar</button>
            </div>
          </form>
        </div>
      </div>
      <footer>
        <Footer changeNav="confi" />
      </footer>
    </>
  );
}

export default ConfiPerfil;
