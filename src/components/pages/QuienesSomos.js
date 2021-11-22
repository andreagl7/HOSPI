import React from 'react';
import '../../App.css';
import './QuienesSomos.css';
import background from './imgs/fondo3.jpg';
import Cards from '../Cards2';
import flecha from './imgs/flecha.png'
export default function QuienesSomos()  {
  return (
    <div className='QuienesSomos-container'style={{ backgroundImage: `url(${background})` }}>
      <div className='texto-container'>
        <h1 className='QuienesSomos'>¿Quienes Somos?</h1>
        <p>Hospiplay es una tienda de videojuegos de la ciudad de medellín en la que puedes encontrar variedad de consolas, accesorios y juegos de la mejor calidad.</p>
        <p>También ofrecemos servicios de reparación y mantenimiento de consolas y computadores.</p>
        <img src={flecha} alt="flecha" width="15%" height="20%"></img>
      </div>
      <div className='card'>
          <Cards/>
        </div>
    </div>
  );
}
