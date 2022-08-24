import React from 'react'
import AllCards from '../components/card/AllCards'
import Fonctionnement from '../components/fonctionnemet/Fonctionnement'
import { useNavigate } from 'react-router-dom'
import Error from './Error'


export default function Home({currentUser}) {
  const navigate=useNavigate()
      return(
    <div>
      <AllCards />
      <Fonctionnement />
    </div>
    )
  
}
