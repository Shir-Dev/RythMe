import React, { useState, useEffect } from "react";
import axios from "axios";
import "./assets/styles/buscar.css";
import "./assets/styles/entradas.css";
import Footer from "./Footer";
import Header from "./Header";
import logo_lupa from "./assets/icons/lupa.png";

import up from "./assets/icons/flechaup.png";
import down from "./assets/icons/flechadown.png";
import Comprar from "./Comprar";
import Carrito from "./Carrito";
import Entradas from "./Entradas";

function Buscar(props) {
  const [buscar, setBuscar] = useState({});
  const [genres, setGenres] = useState([]);
  const [allMusic, setAllMusic] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [classContenedor, setClassContenedor] = useState("contenedor");
  const [entradas, setEntradas] = useState("");
  useEffect(() => {
    axios.get(`http://localhost:3333/musicgenres`).then((res) => {
      setGenres(res.data);
    });
  }, []);

  const losGenres = [<option className="select_city">Genero Musical</option>];

  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    losGenres.push(<option value={genre.name}>{genre.name}</option>);
  }

  const array = [
    <option className="select_city">Selecciona una Ciudad</option>,
  ];

  useEffect(() => {
    axios
      .get(`http://localhost:3333/events/search/filteredCities`)
      .then((res) => {
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

  function takingData(data) {
    setClassContenedor("hidden");
    setEntradas(<Entradas allMusic={data} user={props.user}></Entradas>);
  }

  const formHeader = {
    headerText: "Búsqueda",
    srcArrow: "/bienvenido",
  };
  function sendingData($event) {
    $event.preventDefault();
    let nameToSearch;
    if (buscar.search) {
      nameToSearch = buscar.search.replace(" ", "+");
    }
    const urlToFilter = `http://localhost:3333/events/search?city=${buscar.city}&genre=${buscar.genres}&name=${nameToSearch}`;

    setCarrito(
      <Carrito urlToGet={urlToFilter} takingData={takingData}></Carrito>
    );
  }
  const [option, setOption] = useState();
  const [click, setClick] = useState();
  const [style, setStyle] = useState(down);

  function optionAvanz() {
    if (!click) {
      setStyle(up);
      setClick(true);

      setOption(
        <>
          <label className="genres" for="genres"></label>
          <select
            className="selector"
            id="city"
            onChange={($event) => {
              setCarrito("");
              setBuscar({ ...buscar, city: $event.target.value });
            }}
          >
            {allMusic}
          </select>

          <label className="genres" for="genres"></label>
          <select
            className="selector"
            id="genres"
            onChange={($event) => {
              setCarrito("");
              setBuscar({ ...buscar, genres: $event.target.value });
            }}
          >
            {losGenres}
          </select>
        </>
      );
    } else {
      setStyle(down);
      setClick(false);
      setOption(null);
    }
  }

  return (
    <>
      <div className={classContenedor}>
        <Header headerObject={formHeader} />
        <form onSubmit={sendingData}>
          <div class="box">
            <div class="container-4">
              <input
                type="search"
                id="search"
                placeholder="Artista..."
                onChange={($event) => {
                  setCarrito("");
                  setBuscar({ ...buscar, search: $event.target.value });
                }}
              />
              <button
                className="optionavanz"
                type="button"
                onClick={optionAvanz}
              >
                <img src={style} className="logo_flecha" />
              </button>
            </div>
          </div>
          {option}

          <button className="updateButton1">
            BUSCAR
            <img src={logo_lupa} className="logo_lupa" />
          </button>

          {carrito}
        </form>
        <Footer changeNav="buscar" />
      </div>
      {entradas}
    </>
  );
}

export default Buscar;
