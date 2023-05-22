import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/pages/Erreur404.css'

function Erreur404() {
  return (
    <section className="container404">
      <h1 className="number404">404</h1>
      <h2 className="oups">Oups ! La page que vous demandez n'existe pas.</h2>
      <Link className="link404" to="/">
        Retourner sur la page d'accueil
      </Link>
    </section>
  )
}

export default Erreur404
