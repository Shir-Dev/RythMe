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

  const [objectProfile, setObjectProfile] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3333/users`&&`http://192.168.1.66:3333/users`).then(res => {
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
        <p className="bienvenido">Datos de Usuario</p>
      </header>
      <div className="datosPersonales">
        <div>
      {objectProfile.username}
        <button className="btn_escri"  onClick={() => {changeToInputUsername();}}><img className="logo_escribir" src={logo_escribir}/></button>
        </div>
      <hr />
        <div>
        {objectProfile.name}
        <button className="btn_escri"  onClick={() => {changeToInputName();}}><img className="logo_escribir" src={logo_escribir}/></button>
        </div>
        <div>
        {objectProfile.surname}
        <button className="btn_escri"  onClick={() => {changeToInputSurname();}}><img className="logo_escribir" src={logo_escribir}/></button>
        </div>
        <div>
        {objectProfile.birthDay}
        <button className="btn_escri"  onClick={() => {changeToInputBirthDay();}}><img className="logo_escribir" src={logo_escribir}/></button>
        </div>
        <div>
        {objectProfile.zipCode}
        <button className="btn_escri"  onClick={() => {changeToInputZipcode();}}><img className="logo_escribir" src={logo_escribir}/></button>
        </div>
      </div>
      <hr />
      <footer>
        <Footer changeNav="home" />
      </footer>
    </div>
  );
}

export default ConfiPerfil;
