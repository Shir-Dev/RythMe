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
import Carrito from "./Carrito";

function Buscar() {
  const [buscar, setBuscar] = useState({});
  const [genres, setGenres] = useState([]);
  const [allMusic, setAllMusic] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3333/musicgenres`).then(res => {
      console.log(res.data);
      setGenres(res.data);
    });
  }, []);
  console.log(buscar);
  const losGenres = [<option></option>];

  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    losGenres.push(<option value={genre.name}>{genre.name}</option>);
  }

  const array = [<option></option>];

  useEffect(() => {
    axios
      .get(`http://localhost:3333/events/search/filteredCities`)
      .then(res => {
        let music = res.data;

        for (let i = 0; i < music.length; i++) {
          const musical = music[i];
          array.push(
            <option key={i} value={musical}>
              {musical}
            </option>
          );
        }
        setAllMusic(array);
      });
  }, []);

  const formHeader = {
    headerText: "Búsqueda",
    srcArrow: "/bienvenido"
  };
  function sendingData($event) {
    $event.preventDefault();
    let nameToSearch;
    if (buscar.search) {
      nameToSearch = buscar.search.replace(" ", "+");
    }
    const urlToFilter = `http://localhost:3333/events/search?city=${buscar.city}&genre=${buscar.genres}&name=${nameToSearch}`;
    console.log(urlToFilter);

    setCarrito(<Carrito urlToGet={urlToFilter}></Carrito>);
  }
  return (
    <div className="contenedor">
      <Header headerObject={formHeader} />
      <form onSubmit={sendingData}>
        <div>
          <label className="genres" for="genres">
            Ciudad
          </label>
          <select
            className="selector"
            id="city"
            onChange={$event => {
              setCarrito("");
              setBuscar({ ...buscar, city: $event.target.value });
            }}
          >
            {allMusic}
          </select>
        </div>
        <div>
          <label className="genres" for="genres">
            Genero Musical
          </label>
          <select
            className="selector"
            id="genres"
            onChange={$event => {
              setCarrito("");
              setBuscar({ ...buscar, genres: $event.target.value });
            }}
          >
            {losGenres}
          </select>
        </div>
        <div class="box">
          <div class="container-4">
            <input
              type="search"
              id="search"
              placeholder="Artista..."
              onChange={$event => {
                setCarrito("");
                setBuscar({ ...buscar, search: $event.target.value });
              }}
            />
          </div>
        </div>
        <button className="updateButton">
          BUSCAR
          <img src={logo_lupa} className="logo_lupa" />
        </button>
        {carrito}
      </form>
      <Footer changeNav="buscar" />
    </div>
  );
}

export default Buscar;
