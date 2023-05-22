import React from 'react'
import cover from '../assets/aboutBanniere.png'
import Banniere from '../components/Banniere.jsx'
import datas from '../datas/AboutCollapseContent.json'
import Collapse from '../components/Collapse.jsx'
import '../styles/pages/APropos.css'

function APropos() {
  return (
    <div>
      <Banniere cover={cover}></Banniere>
      <section className="aboutContainer">
        {datas.map((item) => (
          <Collapse
            titre={item.titre}
            contenu={item.contenu}
            key={item.title}
          />
        ))}
      </section>
    </div>
  )
}

export default APropos
