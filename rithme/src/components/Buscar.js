import React, { useState, useEffect } from "react";
import axios from "axios";
import "./assets/styles/buscar.css";
import Footer from "./Footer";
import Header from "./Header";
import logo_lupa from "./assets/icons/lupa.png";

function Buscar() {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:3333/musicgenres` &&
          `http://192.168.1.66:3333/musicgenres`
      )
      .then(res => {
        console.log(res.data);
        setGenres(res.data);
      });
  }, []);

  const losGenres = [];

  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    losGenres.push(<option value={genre.name}>{genre.name}</option>);

  }
  return (
    <div className="contenedor_g">
      <Header />
      <form>
    <div class="box">
    <div class="container-4">
    <input type="search" id="search" placeholder="Search..." />
    <button class="icon"><img src={logo_lupa} className="logo_lupa" /></button>
    </div>
    </div>
    <label className="genres" for="genres">Genero Musical</label>
    <select className="selector">
    {losGenres}
    </select>
    </form>
      <Footer changeNav="buscar" />
    </div>
  );
}

export default Buscar;
