import './App.css'
import React from 'react'
import Router from './pages/Router.jsx'
import Header from './containers/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
  document.title = 'KASA - Chez vous partout et ailleurs.'
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  )
}

export default App
