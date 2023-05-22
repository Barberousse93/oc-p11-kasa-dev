import React from 'react'
import Banniere from '../components/Banniere.jsx'
import cover from '../assets/accueilBanniere.png'
import datas from '../datas/logements.json'
import Card from '../components/Card.jsx'
import '../styles/pages/Accueil.css'

function Accueil() {
  return (
    <div className="accueilContainer">
      <Banniere
        cover={cover}
        legend="Chez vous, partout et ailleurs"
      ></Banniere>
      <section className="cardsContainer">
        {datas.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            cover={item.cover}
            title={item.title}
          ></Card>
        ))}
      </section>
    </div>
  )
}

export default Accueil
