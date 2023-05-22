import React, { useState, useEffect } from 'react'
import '../styles/components/Notation.css'

function Notation(datas) {
  const notation = datas.notation
  const [rating, setRating] = useState(notation)
  const [hover, setHover] = useState(notation)

  useEffect(() => {
    if (!rating) {
      setRating(notation)
      setHover(notation)
    }
  }, [notation])

  // Composant Rating (inspiration Internet)
  // props : Nombre d'étoiles devant être active au chargement.
  // Utilisation de useSate pour gérer le choix utilisateur

  return (
    <div className="etoiles">
      {['', '', '', '', ''].map((etoile, index) => {
        index += 1
        return (
          <span
            key={index}
            className={index <= (hover || rating) ? 'etoile check' : 'etoile'}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <i className="fa-solid fa-star"></i>
          </span>
        )
      })}
    </div>
  )
}

export default Notation
