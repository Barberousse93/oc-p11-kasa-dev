import React, { useState } from 'react'
import '../styles/components/Collapse.css'

// Composant 'collapse' présent sur la page Apropos et les pages détail des appts
// props : datas.title (titre du composant, parti visible quand le composant est fermé)
// datas.content (contenu du collapse)
function Collapse(datas) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={isOpen ? 'collapse visible' : 'collapse'}>
      <div className="collapseTitle" onClick={() => setIsOpen(!isOpen)}>
        {datas.titre}
        <span className={isOpen ? 'icon active' : 'icon'}>
          <i className="fa-sharp fa-solid fa-chevron-down"></i>
        </span>
      </div>
      <div className="collapseContent">{datas.contenu}</div>
    </div>
  )
}

export default Collapse
