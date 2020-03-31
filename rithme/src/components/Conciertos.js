import React, { useState, useEffect } from "react";
import "./assets/styles/conciertos.css";
import Footer from "./Footer";
import Header from "./Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Girl from "./assets/img/girl.jpg";
import play from "./assets/icons/shape.png";
import icono_reloj from "./assets/icons/reloj.png";
import icono_dolar from "./assets/icons/dolar.png";
import img_guitarra from "./assets/img/guitarra.jpg";
import img_rock from "./assets/img/rock.jpg";
import img_pop from "./assets/img/pop.jpg";
import img_blus from "./assets/img/blus.jpg";
import axios from "axios";

function Conciertos() {
  const formHeader = {
    headerText: "Conciertos",
    srcArrow: "/bienvenido"
  };
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3333/users` &&`http://192.168.1.66:3333/users`)
      .then(res => {console.log(res.data); setDatos(res.data);});}, []);
  
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
  <h2 className="parrafo">HOLA{datos.name}</h2>
      <Slider {...settings}>
        <div> <div className="">
          <img src={Girl} className="img_girl" />
          <div className="contenedor_concierto">
            <p>
              <strong className="nombretexto">Judith Hill</strong>
              <p className=""> 08 Noviembre 2019</p>
              <p className="">22:00 </p></p> </div>
        </div>
      </div>
        <div></div>
  
      </Slider>
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
