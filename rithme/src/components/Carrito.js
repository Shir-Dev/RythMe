import React, { useState, useEffect } from "react";
import "./assets/styles/entradas.css";
import Header from "./Header";
import play from "./assets/icons/shape.png";
import icono_reloj from "./assets/icons/reloj.png";
import icono_dolar from "./assets/icons/dolar.png";
import Footer from "./Footer";
import axios from "axios";
import { dateFix, timeFix } from "./dateFixer";

function Carrito(props) {
  const formHeader = {
    headerText: "Entradas",
  };

  const array = [];
  const [allMusic, setAllMusic] = useState([]);
  console.log(allMusic);
  const [footer, setFooter] = useState();
  const [header, setHeader] = useState();

  useEffect(() => {
    let urlToGet = `http://localhost:3333/events`;
    if (!props.urlToGet) {
      setFooter(<Footer changeNav="entradas" />);
      setHeader(<Header headerObject={formHeader} />);
    }
    if (props.urlToGet) {
      urlToGet = props.urlToGet;
    }
    axios.get(urlToGet).then((res) => {
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
      {header}
      <div className="contenedor">{allMusic}</div>
      {footer}
    </div>
  );
}

export default Carrito;
