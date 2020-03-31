import React, { useState, useEffect } from "react";
import axios from "axios";
import "./assets/styles/buscar.css";
import Footer from "./Footer";
import Header from "./Header";
import logo_lupa from "./assets/icons/lupa.png";

function Buscar() {
  const [buscar,setBuscar]= useState([]);
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

  const array = [];
  const [allMusic, setAllMusic] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3333/events`)
      .then(res => { let music = res.data;
              
        for(let i =0; i <  music.length; i++){
          const musical =  music[i];
        array.push(<option key={i} value={musical.location.city}>{musical.location.city}</option>)
          
        }
      setAllMusic(array)
      console.log(array)
     
      
      })}, []);

     
  const losGenres = [];

  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    losGenres.push(<option value={genre.name}>{genre.name}</option>);
  }
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
            <input type="search" id="search" placeholder="Search..."  onChange={$event =>setBuscar({ ...buscar, search: $event.target.value })}/>
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
