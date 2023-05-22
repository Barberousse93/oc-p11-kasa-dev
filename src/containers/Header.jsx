import React from 'react'
import Logo from '../assets/headerLogo.png'
import NavBar from '../components/NavBar.jsx'
import '../styles/containers/Header.css'

function Header() {
  return (
    <header>
      <img className="headerLogo" src={Logo} alt="Logo"></img>
      <NavBar />
    </header>
  )
}

export default Header
