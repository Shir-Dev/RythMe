import React from "react";
import "./assets/styles/footer.css";
import { Link } from "react-router-dom";

function Footer(props) {
  let srcImage = "./navImages/" + props.changeNav + ".png";

  return (
    <div className="container">
      <div className="router-links">
        <Link to="/comprar" className="link"></Link>
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
