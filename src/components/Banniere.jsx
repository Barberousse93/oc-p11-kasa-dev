import React from 'react'
import '../styles/components/Banniere.css'

// Composant bannière présent dans les pages accueil et A propos
// props :datas.cover (photo) et datas.legend affiché si truthly
function Banniere(datas) {
  return (
    <div className="banniere">
      <img className="cover" src={datas.cover} alt="Banniere"></img>
      {datas.legend ? <h1 className="legend">{datas.legend}</h1> : null}
    </div>
  )
}

export default Banniere
