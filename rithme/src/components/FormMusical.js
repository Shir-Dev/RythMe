import React from "react";
import "./assets/styles/formMusical.css";
import Footer from "./Footer";
import Header from "./Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function FormMusical () {
  
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 2
    };
    return (
      <div className="contenedor_form">
        <Header/>

        <h2 className="parrafo">Cuentanos tus Gustos</h2>
        <Slider {...settings}>
          <div>
            <input className="btn_music" type="button" value="Pop" id=""/>
            <input className="btn_music" type="button" value="Rock" id=""/>
            <input className="btn_music" type="button" value="Punk" id=""/>
            <input className="btn_music" type="button" value="Techno" id=""/>
            <input className="btn_music" type="button" value="Hard" id=""/>
            <input className="btn_music" type="button" value="Pop" id=""/>
            <input className="btn_music" type="button" value="Hard" id=""/>
            <input className="btn_music" type="button" value="Pop" id=""/>
           
          </div>
          <div>
          </div>
          <div>
            <input className="btn_music" type="button" value="Pop"/>
            <input className="btn_music" type="button" value="Pop"/>
            <input className="btn_music" type="button" value="Pop"/>
          </div>
      </Slider>
      <input className="btn_continuar" type="submit" value="Finalizar"/>
      <Footer changeNav="conf" />
      </div>
    );
  
}