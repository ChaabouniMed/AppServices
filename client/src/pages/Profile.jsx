import React from 'react'
import AllCards from '../components/card/AllCards'
import Fonctionnement from '../components/fonctionnemet/Fonctionnement'
import NavbarProfile from '../components/navbar/NavbarProfile'

export default function Profile({setUser,user}) {
return (
    <div>
    <NavbarProfile setUser={setUser} user={user}/>
    <AllCards />
    <Fonctionnement />
    </div>
)
}
