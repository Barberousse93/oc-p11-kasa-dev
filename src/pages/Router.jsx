import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Accueil from './Accueil.jsx'
import Erreur404 from './Erreur404.jsx'
import APropos from './APropos.jsx'
import DetailAppt from './DetailAppt.jsx'

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Accueil />}></Route>
        <Route path="/index.html" element={<Accueil />}></Route>
        <Route path="/about" element={<APropos />}></Route>
        <Route path="/detail/:id" element={<DetailAppt />}></Route>
        <Route path="/error" element={<Erreur404 />}></Route>
        <Route path="*" element={<Erreur404 />}></Route>
      </Routes>
    </div>
  )
}

export default Router
