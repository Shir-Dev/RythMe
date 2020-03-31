import React from "react";
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

function Carrito() {
  const formHeader = {
    isArrow: true,
    headerText: "Carrito",
    srcArrow: "/entradas"
  };
  return (
    <div className="contenedor_g">
      <Header headerObject={formHeader} />
      <div className="contenedor">
        <Link to="/entradas" className="links">
          <div className="contenedor_img">
            <img src={Girl} className="img_girl" />
            <div className="contenedor_text">
              <p>
                <strong className="nombretexto">Judith Hill</strong>
              </p>
              <p className="texto2"> 08 Noviembre 2019</p>
              <p className="texto2">
                {" "}
                <img src={icono_reloj} className="icono" />
                22:00
              </p>

              <p className="texto2">
                <img src={icono_dolar} className="icono" />
                25
              </p>
              <img src={play} className="icono_play" />
            </div>
          </div>
        </Link>
        <div className="contenedor_img">
          <img src={img_guitarra} className="img_girl" />
          <div className="contenedor_text">
            <p>
              <strong className="nombretexto">Ismael Cordon</strong>
            </p>
            <p className="texto2"> 08 Noviembre 2019</p>
            <p className="texto2">
              {" "}
              <img src={icono_reloj} className="icono" />
              22:00
            </p>
            <p className="texto2">
              <img src={icono_dolar} className="icono" />
              25
            </p>
            <img src={play} className="icono_play" />
          </div>
        </div>
        <div className="contenedor_img">
          <img src={img_rock} className="img_girl" />
          <div className="contenedor_text">
            <p>
              <strong className="nombretexto">Maria Diaz</strong>
            </p>
            <p className="texto2"> 08 Noviembre 2019</p>
            <p className="texto2">
              {" "}
              <img src={icono_reloj} className="icono" />
              22:00
            </p>
            <p className="texto2">
              <img src={icono_dolar} className="icono" />
              25
            </p>
            <img src={play} className="icono_play" />
          </div>
        </div>
        <div className="contenedor_img">
          <img src={img_pop} className="img_girl" />
          <div className="contenedor_text">
            <p>
              <strong className="nombretexto">Judith Hill</strong>
            </p>
            <p className="texto2"> 08 Noviembre 2019</p>
            <p className="texto2">
              {" "}
              <img src={icono_reloj} className="icono" />
              22:00
            </p>
            <p className="texto2">
              <img src={icono_dolar} className="icono" />
              25
            </p>
            <img src={play} className="icono_play" />
          </div>
        </div>
       
      </div>
      <div>
        <Footer changeNav="entradas" />
      </div>
    </div>
  );
}

export default Carrito;
