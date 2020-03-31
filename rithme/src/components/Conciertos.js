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
          .get(`http://localhost:3333/events`)
          .then(res => { let music = res.data;
                  
            for(let i =0; i <  music.length; i++){
              const musical =  music[i];
            array.push(<img  src={musical.image}  height="100px" width="120px"/>,<br/>)
            array.push(<p key={i}>{musical.artist.name}</p>)  
            }
          setAllMusic(array)
          console.log(array)
          
          })}, []);
          
        
    const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2
  };
  return (
    <div className="contenedor_conci">
      <Header headerObject={formHeader} />
      <div><h2 className="parrafo">HOLA {datos.name}</h2></div>
  

  <div className="contenedor_concierto">
    
  <div className="music">{allMusic}</div>
  
  </div>

    
      <Footer changeNav="conciertos" />
    </div>
  );
}

export default Conciertos;
