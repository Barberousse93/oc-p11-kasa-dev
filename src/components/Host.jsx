import React from 'react'
import '../styles/components/Host.css'

// Composant hôte.
// props : datas.host.picture => photod ; datas.host.name => nom
function Host(datas) {
  const name = datas.host.name
  const picture = datas.host.picture

  return (
    <div className="host">
      <div className="hostName">{name}</div>
      <img className="hostPicture" src={picture} alt={name}></img>
    </div>
  )
}

export default Host
