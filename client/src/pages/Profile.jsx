import React from 'react'
import AllCards from '../components/card/AllCards'
import Fonctionnement from '../components/fonctionnemet/Fonctionnement'
import NavbarProfile from '../components/navbar/NavbarProfile'
import { useNavigate } from 'react-router-dom'

export default function Profile({currentUser}) {
    const navigate= useNavigate()
    console.log(currentUser)
    if(JSON.stringify(currentUser) == JSON.stringify({})) navigate('/error')
    else 
return (
    <div>
    <NavbarProfile currentUser={currentUser}/>
    <AllCards />
    <Fonctionnement />
    </div>
)
}
