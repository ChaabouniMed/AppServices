import React from 'react'
import Navbar from './components/Navbar'
import FormNewAcc from "./components/formulaire/FormNewAcc"
import FormSeConn from "./components/formulaire/FormSeConn"
import AllCards from './components/card/AllCards'
import Fonctionnement from './components/fonctionnemet/Fonctionnement'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <FormNewAcc />
      <FormSeConn />
      <AllCards />
      <Fonctionnement />
      <Footer />
    </div>
  )
}

export default App
