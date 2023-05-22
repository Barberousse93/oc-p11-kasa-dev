import React from 'react'
import Logo from '../assets/footerLogo.png'
import '../styles/components/Footer.css'

// Composant footer
function Footer() {
  return (
    <footer className="footer">
      <img className="footerLogo" src={Logo} alt="Logo"></img>
      <p className="copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
