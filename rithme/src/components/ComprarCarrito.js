import React, { useState, useEffect } from "react";
import "./assets/styles/comprarcarrito.css";
import icono_carrito from "./assets/icons/carrito.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { myTickets, userID } from "./VariableCarrito";

function ComprarCarrito(props) {
  const formHeader = {
    headerText: "Conciertos",
  };
  console.log("Desde carrito tengo este USERID", userID);
  const array = [];
  const [allMusic, setAllMusic] = useState([]);

  function actualizaCarrito() {
    axios
      .post(`http://localhost:3333/users/events`, { eventsId: myTickets })
      .then((res) => {
        let music = res.data;

        for (let i = 0; i < music.length; i++) {
          const musical = music[i];
          array.push(
            <div className="carrito">
              <img src={musical.image} className="carrito_img" />

              <p className="name_artist">{musical.artist.name}</p>
              <div>
                {" "}
                <p id="precio"> {musical.priceRange.min}$</p>
              </div>

              <button
                className="btn_borrar"
                onClick={() => {
                  borrar(i);
                }}
              >
                {" "}
                X
              </button>
            </div>
          );
        }
        setAllMusic(array);
        console.log("actualizado");
      });
  }
  function borrar(index) {
    console.log("el índice de lo que quiero borrar:", index);
    console.log("mis tickets antes de borrar : ", myTickets);
    myTickets.splice(index, 1);

    console.log("mis tickets después de borrar: ", myTickets);
    alert("estoy borrando");
    actualizaCarrito();
  }
  useEffect(() => {
    actualizaCarrito();
  }, []);

  return (
    <div>
      <input type="checkbox" id="abrir-cerrar" name="abrir-cerrar" value="" />
      <label for="abrir-cerrar">
        <img onClick={actualizaCarrito} src={icono_carrito} />{" "}
        <span className="abrir"></span>
        <span className="cerrar"></span>
      </label>
      <div id="sidebar" className="sidebar">
        {allMusic}

        <button className="btn_comprarArticulos">
          Comprar todos los articulos
        </button>
      </div>
    </div>
  );
}

export default ComprarCarrito;
