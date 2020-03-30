import React, { useState, useEffect } from "react";
import logom from "./assets/icons/avatar.png";
import logop from "./assets/icons/comentario2.png";
import logos from "./assets/icons/usuario.png";
import "./assets/styles/confiPerfil.css";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

function ConfiPerfil(props) {
  const [datos, setDatos] = useState([]);

  const [objectProfile, setObjectProfile] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3333/users`).then(res => {
      console.log(res.data);
      setDatos(res.data);
      setObjectProfile({
        username: <p> {res.data.username} </p>,
        name: <p> {res.data.name} </p>,
        surname: <p>{res.data.surname}</p>,
        birthDay:  <p>{res.data.birthDay}</p>,
        zipCode: <p>{res.data.zipCode}</p>
      });
    });
  }, []);

  console.log(datos.musicalInterest);
  const [formObject, setFormObject] = useState();

  function sendingData(event) {
    event.preventDefault();
    console.log(props.hola);
    props.takingData(formObject);
  }
  function changeToInputUsername() {
    setObjectProfile({
      ...objectProfile,
      username: <input type="text" placeholder={datos.username}   onChange={$event =>
        setFormObject({ ...formObject, username: $event.target.value })
      }></input>, 
     
    });}
  function changeToInputName() {
    setObjectProfile({
      ...objectProfile,
      name: <input type="text" placeholder={datos.name}  onChange={$event =>
        setFormObject({ ...formObject, name: $event.target.value })
      }></input>, 
     
    });}
  function changeToInputSurname() {
    setObjectProfile({
      ...objectProfile,
      surname: <input type="text" placeholder={datos.surname}  onChange={$event =>
        setFormObject({ ...formObject, surname: $event.target.value })
      } ></input>,
    });}
  function changeToInputBirthDay() {
    setObjectProfile({
      ...objectProfile,
      birthDay: <input type="text" placeholder={datos.birthDay}    onChange={$event =>
        setFormObject({ ...formObject, birthDay: $event.target.value })
      }></input>,
    });}
  function changeToInputZipcode() {
    setObjectProfile({
      ...objectProfile,
      zipCode: <input type="text" placeholder={datos.zipCode}   onChange={$event =>
        setFormObject({ ...formObject, number: $event.target.value })
      }></input>,
      
    });}
  const formHeader = {
    headerText: "Home",
    srcArrow: ""
  };
  return (
    <div className="contenedor_confiperfil">
      <Header headerObject={formHeader} />
      <header className="">
        <p className="bienvenido">¡Bienvenido!</p>
      </header>
      <div className="datosPersonales">
      {objectProfile.username}
        <input className="btn_escri" type="button" onClick={() => {changeToInputUsername();}}></input>
      <hr />
        {objectProfile.name}
        <input className="btn_escri" type="button" onClick={() => {changeToInputName();}}></input>
        {objectProfile.surname}
        <input className="btn_escri" type="button" onClick={() => {changeToInputSurname();}}></input>
        {objectProfile.birthDay}
        <input className="btn_escri" type="button" onClick={() => {changeToInputBirthDay();}}></input>
        {objectProfile.zipCode}
        <input className="btn_escri" type="button" onClick={() => {changeToInputZipcode();}}></input>
      </div>
      <hr />
      <footer>
        <Footer changeNav="home" />
      </footer>
    </div>
  );
}

export default ConfiPerfil;
