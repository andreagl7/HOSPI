import React from 'react';
import '../../App.css';
import './Servicios.css';
import background from './imgs/fondo3.jpg';
import Cards from '../Cards3';
import flecha from './imgs/flecha.png'
export default function Servicios() {
  return (
    <div className='Servicios-container'style={{ backgroundImage: `url(${background})` }}>
        <div className='texto-container'>
        <h1 className='Servicios'>Servicios</h1>
        <p>En Hospiplay Ofrecemos servicios y productos para videojuegos y computadores.</p>
        <lo>
          <li>Reparación de consolas de vídeo juegos</li>
          <li>Venta de Películas</li> 
          <li>Accesorios y mucho más</li>
        </lo>
        <img src={flecha} alt="flecha" width="15%" height="20%"></img>
        </div>
        <div className='card'>
          <Cards/>
        </div>
    </div>

  );
} 
