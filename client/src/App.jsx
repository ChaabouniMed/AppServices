import React from 'react'
import Navbar from './components/Navbar'
import FormNewAcc from "./components/formulaire/FormNewAcc"
import FormSeConn from "./components/formulaire/FormSeConn"
import AllCards from './components/card/AllCards'
import Fonctionnement from './components/fonctionnemet/Fonctionnement'


function App() {

  return (
    <div>
      <FormNewAcc />
      <FormSeConn />
      <AllCards />
      <Fonctionnement />
    </div>
  )
}

export default App
