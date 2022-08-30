import React from 'react'
import Navbar from '../components/navbar/Navbar'
import NavbarProfile from '../components/navbar/NavbarProfile';
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom';

export default function SharedLayout({currentUser, user}) {
  return (
    <div>
      {/* {console.log(currentUser)} */}
        {JSON.stringify(currentUser) === JSON.stringify({}) ? <Navbar /> : <NavbarProfile currentUser={currentUser} user={user}/>}
        {/* <Navbar /> */}
        <Outlet />
    </div>
  )
}
