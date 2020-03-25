import React from "react";
import "./assets/styles/footer.css";

function Footer(props) {
  /*todas las imagenes que acaben en png las meter en esta carpeta
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
    </div>
  );
}

export default Footer;
