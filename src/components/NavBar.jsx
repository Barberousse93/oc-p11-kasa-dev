import React from 'react'
import '../styles/components/NavBar.css'
import { NavLink } from 'react-router-dom'

// Composant barre de navigation.
// utilisaiton de {Navlink} pour bénéficier de la classe 'isActive'
function NavBar() {
  return (
    <nav className="navBar">
      <NavLink className="navBarLink" to="/">
        Accueil
      </NavLink>
      <NavLink className="navBarLink" to="/about">
        A propos
      </NavLink>
    </nav>
  )
}

export default NavBar
