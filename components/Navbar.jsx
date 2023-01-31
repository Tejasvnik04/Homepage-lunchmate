import React from 'react';
import '../components/Navbar.css';
import tej from '../images/applogo.png'
import {Link} from 'react-scroll';
 const Navbar = () => {
  return (
     <div className='nav'>
        < img src ={tej} className='logoic'  />
        <div className='topnav'>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </div>
     </div>
  )
}

export default Navbar
