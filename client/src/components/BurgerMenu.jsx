import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import menu from '../assets/menu.svg'
import xx from '../assets/xx.svg'

const BurgerMenu = () => {

const [menu, setMenu] = useState(false);







  return (

    <div className='nav-bar'>


        <img src={xx} alt=""  className='invert' />
   
      <nav className='flex flex-col items-center justify-center'>
        <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/MainPage'>View</Link></li>
        <li><Link to='/Aboutus'>About us</Link></li>

        </ul>


    
      </nav>
        <button className='bg-black h-5 w-14 text-white p-5 text-center hidden'>Open</button>
   





    </div>
  )
}

export default BurgerMenu