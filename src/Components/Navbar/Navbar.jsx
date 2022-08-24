import React, { useRef } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
import {IoMdContact} from 'react-icons/io'

import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  
    const navRef=useRef()
    const showNavbar=()=>{
      navRef.current.classList.toggle("responsive_nav")
    }
  return (
    <>
   <header>
     <nav ref={navRef}>
       <Link className='text' onClick={showNavbar} to="/">Home</Link>
       <Link className='text' onClick={showNavbar} to="/products">Naruto</Link>
       <Link className='text' onClick={showNavbar} to="/profile">Dragon BAll Z</Link>
       <Link className='text' onClick={showNavbar} to="/contact">Contact</Link>
       <Link className='text' onClick={showNavbar} to="/about">About</Link>
       <button className='nav-btn nav-close-btn' onClick={showNavbar}>
         <FaTimes/>
       </button>
     <Link onClick={showNavbar} className='navSerch' to="/search"><FaSearch/></Link>
     </nav>
     <button className='nav-btn' onClick={showNavbar}>
       <FaBars/>
     </button>
   </header>
    </>
  )
}

export default Navbar