import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom';

export default function SharedLayout() {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}
