import React from "react";
import "./assets/styles/entradas.css";
import Header from "./Header";
import play from "./assets/icons/shape.png";
import icono_reloj from "./assets/icons/reloj.png";
import icono_dolar from "./assets/icons/dolar.png";
import icono_ubicacion from "./assets/icons/ubicacion.png";
import icono_nota from "./assets/icons/nota.png";
import icono_microfono from "./assets/icons/microfono.png";
import Footer from "./Footer";
import { dateFix, timeFix } from "./dateFixer";
import Axios from "axios";
import { myTickets, user } from "./VariableCarrito";
function Entradas(props) {
  user.push(props.user);
  const formHeader = {
    isArrow: true,
    headerText: "Entradas",
    srcArrow: "/comprar",
  };
  let eventDay;
  let eventTime;
  if (props.allMusic.dates) {
    eventDay = dateFix(props.allMusic.dates.dateTime);
    eventTime = timeFix(props.allMusic.dates.dateTime);
  }

  function savingMyEvent() {
    myTickets.push(props.allMusic._id);
    console.log(myTickets);

    /*     userAddEvent.eventsId.push(props.allMusic._id);
    Axios("http://localhost:3333/profiles/edit", {
      method: "PUT",
      data: userAddEvent,
    })
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Error al Updatear");
      }); */
  }
  return (
    <div className="contenedor_g">
      <Header headerObject={formHeader} />
      <div className="contenedor">
        <div className="contenedor_img">
          <img src={props.allMusic.image} className="img_girl" />
          <div className="contenedor_text">
            <p>
              <strong className="nombretexto">
                {props.allMusic.artist.name}
              </strong>
            </p>
            <p className="texto2"> {eventDay}</p>
            <p className="texto2">
              {" "}
              <img src={icono_reloj} className="icono_reloj_dolar" />
              {eventTime}
            </p>
            <p className="texto2">
              <img src={icono_dolar} className="icono_reloj_dolar" />
              {props.allMusic.priceRange.min}- {props.allMusic.priceRange.max}
            </p>
            <img src={play} className="icono_play" />
          </div>
        </div>

        <p className="Pasistiran">{props.allMusic.name}</p>

        <div className="ubicacion">
          <p>
            <img src={icono_ubicacion} className="icono" />
            {props.allMusic.location.name}, {props.allMusic.location.city}.{" "}
            {props.allMusic.location.country.name}
          </p>
          <p>
            <img src={icono_microfono} className="icono" />
            {props.allMusic.artist.name}
          </p>
          <p>
            <img src={icono_nota} className="icono" />
            {props.allMusic.subGenre.name}
          </p>
        </div>

        <div className="botones">
          <input
            className="btn_comprar"
            type="button"
            value="Comprar"
            onClick={savingMyEvent}
          />
        </div>
      </div>

      <div>
        <Footer changeNav="entradas" />
      </div>
    </div>
  );
}

export default Entradas;
