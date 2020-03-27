import React, { useState, useEffect } from "react";
import axios from "axios";
import "./assets/styles/buscar.css";
import Footer from "./Footer";
import Header from "./Header";

function Buscar() {
  const [music, setMusic] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:3333/musicgenres` &&
          `http://192.168.1.66:3333/musicgenres`
      )
      .then(res => {
        console.log(res.data);
        setMusic(res.data);
      });
  }, []);
  return (
    <div className="contenedor_g">
      <Header />

      <Footer changeNav="buscar" />
    </div>
  );
}

export default Buscar;
