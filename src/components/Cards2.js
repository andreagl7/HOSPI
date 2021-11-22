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
              src='images/perfil.jpg'
              text='Contamos con asesroría especializada en videojuegos y consolas.'
              label='HOSPIPLAY'
              path='/Servicios'
            />
            <CardItem
              src='images/ordenador-con-windows_318-9862.jpg'
              text='No solo nos especializamos en consolas, también te podemos asesorar con tu PC Gammer'
              label='PC Gammer'
              path='/Servicios'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;