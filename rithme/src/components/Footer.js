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
      <footer className="b-footer">
        <img src={srcImage} className="imageCss"></img>
      </footer>
      <div className="bienven">
        <Link to="/bienvenido">bienve</Link>
      </div>
      <div className="entra">
        <Link to="/entradas">entrad</Link>
      </div>
      <div className="formu">
        <Link to="/form">form</Link>
      </div>
    </div>
  );
}

export default Footer;
