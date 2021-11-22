import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/consola.jpg'
              text='Encuentra tus consolas favoritas'
              label='Consolas'
              path='/Servicios'
            />
            <CardItem
              src='images/videogames.png'
              text='Los mejores, los clásicos, lo nuevos. Todo lo mejor en Juegos para todas las consolas.'
              label='Juegos'
              path='/Servicios'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/kawaii_gamer.jpg'
              text='Los mejores accesorios para tener partidas épicas.'
              label='Accesorios'
              path='/Servicios'
            />
            <CardItem
              src='images/accesorios.jpeg'
              text='Los mejores accesorios para tener partidas épicas.'
              label='Accesorios'
              path='/Servicios'
            />
            <CardItem
              src='images/reparaciones.jpg'
              text='Ofrecemos reparación y mantenimiento de tus consolas y computadores.'
              label='Reparacion'
              path='/Contactenos'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;