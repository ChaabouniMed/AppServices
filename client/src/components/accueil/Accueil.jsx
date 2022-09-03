import React from 'react'
import './Accueil.css'
import Searchbar from '../../pages/Searchbar'
import Particle from '../Particle'

export default function Accueil() {
  return (
    <div className='accueil-container'>
      <div className='particule'>
      <Particle />
      </div>
      <img className='accueil--img' src="../../../public/images/Capture.PNG" alt="" />
      <div className='search'>
        <div className='accueil-text'>
        </div>
          <Searchbar />
      </div>
    </div>
  )
}
