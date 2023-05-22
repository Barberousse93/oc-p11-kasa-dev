import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/Card.css'

// Composant card du logement.
// Lien vers la page de l'appt basée sur datas.id (param dynamique du router)
// props : datas.cover et datas.title

function Card(datas) {
  return (
    <Link className="cardLink" to={`/detail/${datas.id}`}>
      <img className="cardCover" src={datas.cover} alt={datas.title}></img>
      <p className="cardTitle">{datas.title}</p>
    </Link>
  )
}

export default Card
