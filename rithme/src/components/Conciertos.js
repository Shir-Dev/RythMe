import React, { useState, useEffect } from "react";
import "./assets/styles/conciertos.css";
import Footer from "./Footer";
import Header from "./Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

function Conciertos() {
  const formHeader = {
    headerText: "Conciertos"
  };
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3333/users` && `http://192.168.1.66:3333/users`)
      .then(res => {
        setDatos(res.data);
      });
  }, []);

  const [musical, setMusical] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://app.ticketmaster.com/discovery/v2/events.json?size=200&classificationName=Music&countryCode=ES&apikey=ntGPVQaujf56CfGVAEXhDAioEwQA5Apr`
      )
      .then(res => {
        setMusical(res.data);
        console.log(musical);
      });
  }, []);

  const allMusic = [];
  for (let i = 0; i < musical._embedded.events.length; i++) {
    const music = musical._embedded.events[i];

    allMusic.push(<p> {music}</p>);
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2
  };
  return (
    <div className="contenedor">
      <Header headerObject={formHeader} />
      <h2 className="parrafo">HOLA {datos.name}</h2>
      <Slider {...settings}>
        <div>{allMusic} </div>

        <div></div>
      </Slider>
      <input className="btn_continuar" type="submit" value="Finalizar" />
      <Footer changeNav="conciertos" />
    </div>
  );
}

export default Conciertos;
