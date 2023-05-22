import React from 'react'
import '../styles/components/ApptNomLocation.css'

// Composant contenant le nom de la location
// et sa localisation (props : datas.title & datas.location)
function ApptNomLocation(datas) {
  return (
    <div className="apptNomLocation">
      <h1 className="nomTitre">{datas.title}</h1>
      <h2 className="nomLocation">{datas.location}</h2>
    </div>
  )
}

export default ApptNomLocation
