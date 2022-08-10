import React from 'react'
import Navbar from './components/Navbar'
import FormNewAcc from "./components/formulaire/FormNewAcc"
import FormSeConn from "./components/formulaire/FormSeConn"
import Card from "./components/card/Card"
import AllCards from './components/card/AllCards'


function App() {

  return (
    <div>
      <FormNewAcc />
      <FormSeConn />
      <AllCards />
    </div>
  )
}

export default App
