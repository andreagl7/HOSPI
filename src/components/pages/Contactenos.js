import React from 'react';
import '../../App.css';
import './Contactenos.css';
import background from './imgs/fondo3.jpg';
export default function Contactenos() {
  return (
    <div className='Contactenos-container'style={{ backgroundImage: `url(${background})` }}>
        <h1 className='Contactenos'>Contactenos</h1>
        <p>Correo Electrónico: edisonquinterovarela@gmail.com </p>
        <p>Wpp: +57 3104661255 </p>
        <p>Teléfono: 310 4661255</p>
        <p><a href="https://www.facebook.com/hospiplay/">Facebook: hospiplay</a></p>
        <p>Intagram: @hospiplay</p>
        <br/>
        <p>Nuestra tienda física la encuentras en el segundo piso del cc palacio nacional en medellín </p>
        <p>Cr 52 # 48-45 local 206</p>
        <br/>
        <p>Te esperamos!</p>
    </div>
  )
}