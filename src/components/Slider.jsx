// import React from 'react'
import React, { useState } from 'react'
import '../styles/components/Slider.css'

// composant Slider (inspiration Internet)
// props : Tableau d'URLs d'images

function Slider(datas) {
  const [Current, setCurrent] = useState(0)
  const nbImages = datas.images.length

  const suivante = () => {
    setCurrent(Current === nbImages - 1 ? 0 : Current + 1)
  }

  const precedente = () => {
    setCurrent(Current === 0 ? nbImages - 1 : Current - 1)
  }

  return (
    <section className="slider">
      {datas.images.map((image, index) => (
        <div
          className={index === Current ? 'sliderImage active' : 'sliderImage'}
          key={index}
        >
          {index === Current && <img src={image} alt="" key={index}></img>}
        </div>
      ))}
      {nbImages > 1 && (
        <i className="fa-solid fa-chevron-left prev" onClick={precedente}></i>
      )}
      {nbImages > 1 && (
        <i className="fa-solid fa-chevron-right next" onClick={suivante}></i>
      )}
      {nbImages > 1 && (
        <div className="sliderCompteur">
          {Current + 1}/{nbImages}
        </div>
      )}
    </section>
  )
}

export default Slider
