import React, { useState, useEffect } from "react";
import "./assets/styles/entradas.css";
import Header from "./Header";
import Girl from "./assets/img/girl.jpg";
import play from "./assets/icons/shape.png";
import icono_reloj from "./assets/icons/reloj.png";
import icono_dolar from "./assets/icons/dolar.png";
import img_guitarra from "./assets/img/guitarra.jpg";
import img_rock from "./assets/img/rock.jpg";
import img_pop from "./assets/img/pop.jpg";
import img_blus from "./assets/img/blus.jpg";
import icono_ubicacion from "./assets/icons/ubicacion.png";
import icono_nota from "./assets/icons/nota.png";
import icono_microfono from "./assets/icons/microfono.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import Comprar from "./Comprar";
import { dateFix, timeFix } from "./dateFixer";

function Carrito(props) {
  const formHeader = {
    isArrow: true,
    headerText: "Carrito",
    srcArrow: "/entradas"
  };

  const array = [];
  const [allMusic, setAllMusic] = useState([]);
  console.log(allMusic);

  useEffect(() => {
    axios.get(`http://localhost:3333/events`).then(res => {
      let music = res.data;
      let eventDay;
      let eventTime;
      for (let i = 0; i < music.length; i++) {
        const musical = music[i];
        console.log(musical.dates);
        if (musical.dates) {
          eventDay = dateFix(musical.dates.dateTime);
          eventTime = timeFix(musical.dates.dateTime);
        }
        array.push(
          <div
            className="contenedor_img"
            onClick={() => {
              props.takingData(musical);
            }}
          >
            <img src={musical.image} className="img_girl" />
            <div className="contenedor_text">
              <p>
                <strong className="nombretexto">{musical.artist.name}</strong>
              </p>
              <p className="texto2">{eventDay}</p>
              <p className="texto2">
                {" "}
                <img src={icono_reloj} className="icono_reloj_dolar" />
                {eventTime}
              </p>

              <p className="texto2">
                <img src={icono_dolar} className="icono_reloj_dolar" />
                {musical.priceRange.min}$
              </p>
              <img src={play} className="icono_play" />
            </div>
          </div>
        );
      }
      setAllMusic(array);
    });
  }, []);

  return (
    <div className="contenedor_g">
      <Header headerObject={formHeader} />
      <div className="contenedor">{allMusic}</div>
      <Footer changeNav="entradas" />
    </div>
  );
}

export default Carrito;
