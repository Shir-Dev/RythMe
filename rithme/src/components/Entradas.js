import React from "react";
import "./assets/styles/entradas.css";
import Header from "./Header";
import Girl from "./assets/img/girl.jpg";
import play from "./assets/icons/shape.png";
import icono_reloj from "./assets/icons/reloj.png";
import icono_dolar from "./assets/icons/dolar.png";
import icono_ubicacion from "./assets/icons/ubicacion.png";
import icono_nota from "./assets/icons/nota.png";
import icono_microfono from "./assets/icons/microfono.png";
import Footer from "./Footer";

function Entradas(props) {
  const formHeader = {
    headerText: "Entradas"
  };

  
  return (
    <div className="contenedor_g">
      <Header headerObject={formHeader} />
      <div className="contenedor">
        <div className="contenedor_img">
          <img src={Girl} className="img_girl" />
          <div className="contenedor_text">
            <p>
  <strong className="nombretexto">{props.musical.artist.name}</strong>
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
        <div className="botones">
          <input className="btn_comprar" type="button" value="Comprar" />
          <input className="btn_compartir" type="button" value="Compartir" />
        </div>
        <div className="ubicacion">
          <p>
            <img src={icono_ubicacion} className="icono" />
            SALA CLAMORES - MADRID,ESPAÑA
          </p>
          <p>
            <img src={icono_microfono} className="icono" />
            Judith Hill + Dr. Funk
          </p>
          <p>
            <img src={icono_nota} className="icono" />
            Soul / Funk
          </p>
          <p className="Pasistiran">16 asistiran</p>
          <p className="Pasistiran">4 amigos</p>
        </div>
        <div>
          <p className="texto3">
            Judith Glory Hill es una cantante y compositora estadounidense de
            Los Ángeles , California. Ella ha proporcionado coros para artistas
            como Michael Jackson , Stevie Wonder y Josh Groban .
          </p>
          <p className="texto3">
            En 2009, Hill fue elegido como el dúo de Jackson para la canción " I
            Just Can't Stop Loving You " durante su gira de conciertos This Is
            It . Después de la muerte de Jackson en 2009, ella, junto con el
            resto de los miembros del elenco de This Is It , actuó en el
            servicio conmemorativo de Jackson y atrajo la atención mundial
            cuando cantó el papel principal en la canción " Heal the World ".
          </p>
          <p className="texto3">
            {" "}
            El ascenso de Hill a la fama se cuenta brevemente en20 pies de
            Stardom , una película documental que cuenta la historia no contada
            de los cantantes de respaldo detrás de algunas de las "mayores
            leyendas musicales del siglo XXI". También es una artista destacada
            en la banda sonora de la película. Ella ganó el Premio Grammy a la
            Mejor Película Musical por su actuación en esta película.
          </p>
        </div>
      </div>
      <div>
        <Footer changeNav="entradas" />
      </div>
    </div>
  );
}

export default Entradas;
