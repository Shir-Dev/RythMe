import React from "react";
import "./assets/styles/footer.css";
import { Link } from "react-router-dom";

function Footer(props) {
  /*todas las imagenes que acaben en png las mete en esta carpeta
  y le pasas el nombre de la imagen por el props
  se te pintará esa imagen*/

  let srcImage = "./navImages/" + props.changeNav + ".png";

  /* if (props.changeNav === "Conf") {
    srcImage = confSrc;
  }*/

  return (
    <div className="container">
      <div className="router-links">
        <Link to="/entradas" className="link"></Link>
        <Link to="/buscar" className="link"></Link>
        <Link to="/bienvenido" className="link"></Link>
        <Link to="/conciertos" className="link"></Link>
        <Link to="/configuracion" className="link"></Link>
      </div>
      <footer className="b-footer">
        <img src={srcImage} className="imageCss"></img>
      </footer>
    </div>
  );
}

export default Footer;
