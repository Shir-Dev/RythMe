import React, { useState, useEffect } from "react";
import "./assets/styles/conciertos.css";
import Footer from "./Footer";
import Header from "./Header";
import icono_qr from "./assets/icons/qr.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

function Conciertos(props) {
  const formHeader = {
    headerText: "Mis conciertos",
  };
 const [datos, setDatos] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3333/users`).then((res) => {
      setDatos(res.data);
    });
  }, []);

  const array = [];
  const [allMusic, setAllMusic] = useState([]);
  useEffect(() => {
    console.log(props.user);
    axios.post(`http://localhost:3333/users/events`, props.user).then((res) => {
      let music = res.data;

      for (let i = 0; i < music.length; i++) {
        const musical = music[i];
        array.push(
          <div className="contenedor_img">
            <img src={musical.image} className="img_girl" />
            <div className="contenedor_text">
              <p>
                <strong className="nombretexto2">{musical.artist.name}</strong>
              </p>
              <img src={icono_qr} className="codigoqr" />
            </div>
          </div>
        );
      }
      setAllMusic(array);
      console.log(array);
    });
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
  };
  return (
    <div className="contenedor_conci">
      <Header headerObject={formHeader} />
     <div>
        <h2 className="parrafo2">Tus entradas, {props.user.name} :</h2>
      </div>

      <div className="contenedor_concierto">
        {allMusic}
      </div>
      

      <Footer changeNav="conciertos" />//
    </div>
  );
}

export default Conciertos;
