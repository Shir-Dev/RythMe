import React, { useState, useEffect } from "react";
import "./assets/styles/comprarcarrito.css";
import Footer from "./Footer";
import Header from "./Header";
import icono_qr from "./assets/icons/qr.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

function ComprarCarrito(props) {
  const formHeader = {
    headerText: "Conciertos"
  };

  const array = [];
  const [allMusic, setAllMusic] = useState([]);
  useEffect(() => {
    console.log(props.user);
    axios.post(`http://localhost:3333/users/events`, props.user).then(res => {
      let music = res.data;

      for (let i = 0; i < music.length; i++) {
        const musical = music[i];
        array.push(
          <div className="carrito">
            <img src={musical.image} className="carrito_img" />
            
              <p>
               {musical.artist.name}
             
              </p>
             <p>  {musical.priceRange.min}$</p>
            <button onClick="borrar()">
              X
            </button>
            <hr/>
          </div>
        );
      }
      setAllMusic(array);
      console.log(array);
    });
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2
  };
  return (
    
      
     

      <div className="contenedor_carrito">{allMusic}</div>

      
    
  );
}

export default ComprarCarrito;
