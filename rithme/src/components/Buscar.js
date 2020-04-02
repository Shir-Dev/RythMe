import React, { useState, useEffect } from "react";
import axios from "axios";
import "./assets/styles/buscar.css";
import "./assets/styles/entradas.css";
import Footer from "./Footer";
import Header from "./Header";
import logo_lupa from "./assets/icons/lupa.png";
import play from "./assets/icons/shape.png";
import icono_reloj from "./assets/icons/reloj.png";
import icono_dolar from "./assets/icons/dolar.png";

function Buscar() {
  const [buscar,setBuscar]= useState([]);
  const [genres, setGenres] = useState([]);
  const [allMusic, setAllMusic] = useState([]);
  const [busqueda,setBusqueda] = useState([]);
  const array = [];
  const arrayMusic = [];

  useEffect(() => {
    axios
      .get(`http://localhost:3333/musicgenres` &&`http://192.168.1.66:3333/musicgenres`)
      .then(res => { console.log(res.data); setGenres(res.data);});}, []);

  const losGenres = [];

  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    losGenres.push(<option value={genre.name}>{genre.name}</option>);
  }



  useEffect(() => {
    axios
      .get(`http://localhost:3333/events`)
      .then(res => { let music = res.data;
              
        for(let i =0; i <  music.length; i++){
          const musical =  music[i];
        array.push(<option key={i} value={musical.location.city}>{musical.location.city}</option>) 
        arrayMusic.push( <div className="contenedor_img">
        <img src={musical.image} className="img_girl" />
        <div className="contenedor_text">
          <p>
        <strong className="nombretexto">{musical.artist.name}</strong>
          </p>
          <p className="texto2">08/10/2020</p>
          <p className="texto2">
            {" "}
            <img src={icono_reloj} className="icono_reloj_dolar" />
            22:00
          </p>

          <p className="texto2">
            <img src={icono_dolar} className="icono_reloj_dolar" />
            {musical.priceRange.min}$
          </p>
          <img src={play} className="icono_play" />
        </div> 
      </div>)
        }
      setAllMusic(array)
      
     
     
      
      })}, []);
      
     

  const formHeader = {
    headerText: "Búsqueda",
    srcArrow: "/bienvenido"
  };



  return (
    <div className="contenedor">
      <Header headerObject={formHeader} />
      <form>
        <div class="box">
          <div class="container-4">
            <input type="search" id="search" placeholder="Artista..."  onChange={$event =>setBuscar({ ...buscar, search: $event.target.value })}/>
            <button class="icon" onClick="">
              <img src={logo_lupa} className="logo_lupa" />
            </button>
          </div>
        </div>
        <div>
        <label className="genres" for="genres">
          Ciudad
        </label>
        <select className="selector" id="city"  onChange={$event =>setBuscar({ ...buscar, city: $event.target.value })}>{allMusic}</select>
        </div>
        <div>
        <label className="genres" for="genres">
          Genero Musical
        </label>
        <select  className="selector" id="genres"  onChange={$event =>setBuscar({ ...buscar, genres: $event.target.value })}>{losGenres}</select>
        </div>
      </form>
      <Footer changeNav="buscar" />
    </div>
  );
}

export default Buscar;
