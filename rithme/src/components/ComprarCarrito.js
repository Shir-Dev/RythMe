import React, { useState, useEffect } from "react";
import "./assets/styles/comprarcarrito.css";
import icono_carrito from "./assets/icons/carrito.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { myTickets } from "./VariableCarrito";

function ComprarCarrito(props) {
  const formHeader = {
    headerText: "Conciertos",
  };

  const array = [];
  const [allMusic, setAllMusic] = useState([]);
  useEffect(() => {
    console.log("esto es props users", props.user);
    console.log("estos son mis tickets", myTickets);
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

              <button className="btn_borrar" onClick={()=>{
                borrar(i)
              }} >              X
              </button>
            </div>
          );
          function borrar(index){
           myTickets.splice(index, 1);
           
           alert('estoy borrando')
          
           }
         
        }
        setAllMusic(array);
        console.log(array);
      });
  }, []);

  
  return (
    <div>
      <input type="checkbox" id="abrir-cerrar" name="abrir-cerrar" value="" />
      <label for="abrir-cerrar">
        <img src={icono_carrito} /> <span className="abrir"></span>
        <span className="cerrar"></span>
      </label>
      <div id="sidebar" className="sidebar">
        {allMusic}

        <button className="btn_comprarArticulos">Comprar todos los articulos</button>
      </div>
    </div>
  );
}

export default ComprarCarrito;
