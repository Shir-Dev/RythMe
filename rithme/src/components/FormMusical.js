import "./assets/styles/formMusical.css";
import Header from "./Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default function FormMusical(props) {
  const [music, setMusic] = useState([]);
  const [redirect, setRedirect] = useState();
  useEffect(() => {
    axios.get(`http://localhost:3333/musicgenres`).then(res => {
      console.log(res.data);
      setMusic(res.data);
    });
  }, []);
  const formHeader = {
    isArrow: true,
    headerText: "Registro",
    srcArrow: "/registro"
  };
  const laMusica = [];
  const musica1 = [];
  const musica2 = [];
  const musica3 = [];
  const musica4 = [];
  const musica5 = [];

  const musicalInterest = [];

  function changeColor(idMusic) {
    const button = document.getElementById(idMusic);

    if (button.className === "btn_music") {
      button.className = "btn_music_on";
      musicalInterest.push(idMusic);
    } else {
      button.className = "btn_music";
      musicalInterest.splice(musicalInterest.indexOf(idMusic), 1);
    }

    console.log(musicalInterest);
  }

  for (let i = 0; i < music.length; i++) {
    const musica = music[i];
    laMusica.push(
      <input
        className="btn_music"
        onClick={() => {
          changeColor(musica.name);
        }}
        type="button"
        value={musica.name}
        id={musica.name}
      />
    );
  }

  for (let i = 0; i < laMusica.length; i++) {
    if (i < 8) {
      musica1.push(laMusica[i]);
    }
    if (i >= 8 && i < 16) {
      musica2.push(laMusica[i]);
    }
    if (i >= 16 && i < 24) {
      musica3.push(laMusica[i]);
    }
    if (i >= 24 && i < 32) {
      musica4.push(laMusica[i]);
    }
    if (i >= 32 && i < 40) {
      musica5.push(laMusica[i]);
    }
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2
  };
  function sendingRegister() {
    let registerObject = props.formObject;
    registerObject.musicalInterest = musicalInterest;
    console.log(registerObject);
    const formData = new FormData();

    const arrayToAppend = [
      "username",
      "name",
      "surname",
      "email",
      "password",
      "zipCode",
      "birthDay",
      "musicalInterest",
      "userPhoto"
    ];
    for (let field of arrayToAppend) {
      formData.append(field, registerObject[field]);
    }
    axios
      .post("http://localhost:3333/users/signup", formData, {
        //data: registerObject,
        headers: { "content-type": "multipart/form-data" },
        withCredentials: true
      })
      .then(res => {
        console.log(res.status);
        if (res.status === 200) {
          setRedirect(<Redirect to="/bienvenido" />);
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        alert("Error al registrarse");
      });
  }

  return (
    <div className="contenedor_form">
      {redirect}
      <Header headerObject={formHeader} />

      <h2 className="parrafo">Cuentanos tus Gustos</h2>
      <Slider {...settings}>
        <div>{musica1}</div>
        <div></div>
        <div>{musica2}</div>
        <div></div>
        <div>{musica3}</div>
        <div></div>
        <div>{musica4}</div>
        <div></div>
        <div>{musica5}</div>
      </Slider>
      <input
        className="btn_continuar"
        type="submit"
        value="Finalizar"
        onClick={sendingRegister}
      />
    </div>
  );
}
