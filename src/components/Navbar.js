import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css'
import banner from './pages/imgs/hospihor.jpg'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setbutton] =useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setbutton(false)
        } else {
            setbutton(true)
        }
    };

    useEffect(()=>{
        showButton()
    }, []);


    window.addEventListener('resize', showButton);
    return (
        <>
         <nav className="navbar">
            <div className="navbar-container">
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <img src={banner} alt="banner" width="45%" height="15%"></img>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/QuienesSomos' className='nav-links' onClick={closeMobileMenu}>
                            ¿Quienes Somos?
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Servicios' className='nav-links' onClick={closeMobileMenu}>
                            Servicios
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Contactenos' className='nav-links' onClick={closeMobileMenu}>
                            Contactenos
                        </Link>
                    </li>
                </ul>
                
            </div> 
         </nav>     
        </>
    )
}

export default Navbar
