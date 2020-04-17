import React, { useState } from "react";
import "./assets/styles/configuracion.css";
import Footer from "./Footer";
import Header from "./Header";
import { Link, Redirect } from "react-router-dom";
import logoConf22 from "./assets/icons/logoConf22.png";
import logoConfi33 from "./assets/icons/logoConfi33.png";
import axios from "axios";
function Configuracion(props) {
  const [reload, setReload] = useState();
  const formHeader = {
    headerText: "Configuración",
  };
  function logOut() {
    axios("http://localhost:3333/users/logout", { withCredentials: true })
      .then((res) => {
        if (res.status === 200) {
          console.log("redirigiendo");
          setReload(<Redirect to="bienvenido"></Redirect>);
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false, redirect: true });
      });
  }

  return (
    <div className="contenedor">
      {reload}
      <Header headerObject={formHeader} />
      <div className="user1">
        <h2>¡Hola! {props.user.username}</h2>
        <h3 className="cerrar_sesion" onClick={logOut}>
          {" "}
          Cerrar sesión
        </h3>
      </div>

      <div>
        <Link to="/confi" className="contenedor_confi">
          <div className="confi_perfil">Configura tu perfil</div>
          <div className="logoConf">
            <img src={logoConfi33} />
          </div>
        </Link>
      </div>

      <div>
        <Link to="/sincro" className="contenedor_confi">
          <div className="confi_perfil">Sincroniza tu música y plataformas</div>
          <div className="logoConf">
            <img src={logoConf22} />
          </div>
        </Link>
      </div>

      <Footer changeNav="confi" />
    </div>
  );
}

export default Configuracion;
