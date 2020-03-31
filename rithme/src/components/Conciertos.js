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
      .get(`http://localhost:3333/users` &&`http://192.168.1.66:3333/users`)
      .then(res =>{  setDatos(res.data);});}, []);
  
      const array = [];
      const [allMusic, setAllMusic] = useState([]);
      useEffect(() => {
        axios
          .get(`https://app.ticketmaster.com/discovery/v2/events.json?size=200&classificationName=Music&countryCode=ES&apikey=ntGPVQaujf56CfGVAEXhDAioEwQA5Apr`)
          .then(res => { let musical= res.data._embedded.events;
                  
            for(let i =0; i <  musical.length; i++){
              const music =  musical[i];
            array.push(<p key={i}>{music.name}</p>,<p>{music.id}</p>,<img src={music.images[0].url}  height="42" width="42"/>)
              
            }
            setAllMusic(array)
       
          
          })}, []);
        
        
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

  <div className="contenedor_concierto"><p className="music">{allMusic}</p></div>

      <input
        className="btn_continuar"
        type="submit"
        value="Finalizar"
      
      />
      <Footer changeNav="conciertos" />
    </div>
  );
}

export default Conciertos;
