import React, { useState, useEffect } from "react";
import "./assets/styles/entradas.css";
import Header from "./Header";
import play from "./assets/icons/shape.png";
import icono_reloj from "./assets/icons/reloj.png";
import icono_dolar from "./assets/icons/dolar.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import Entradas from "./Entradas";

function Carrito(props) {
  const formHeader = {
    headerText: "Carrito"
  };

  const array = [];
  const [allMusic, setAllMusic] = useState([]);
  console.log(allMusic);

  useEffect(() => {
    axios.get(`http://localhost:3333/events`).then(res => {
      let music = res.data;

      for (let i = 0; i < music.length; i++) {
        const musical = music[i];
        array.push(
          <div className="contenedor_img">
            <img src={musical.image} className="img_girl" />
            <div className="contenedor_text">
              <p>
                <strong className="nombretexto">{musical.artist.name}</strong>
              </p>
              <p className="texto2">08/10/2020</p>
              <p className="texto2">
                {" "}
                <img src={icono_reloj} className="icono" />
                22:00
              </p>

              <p className="texto2">
                <img src={icono_dolar} className="icono" />
                {musical.priceRange.min}$
              </p>
              <img src={play} className="icono_play" />
            </div>
          </div>
        );
      }
      setAllMusic(array);
      console.log(array);
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
