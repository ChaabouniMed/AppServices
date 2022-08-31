import React from 'react'
import './Accueil.css'
import Searchbar from '../../pages/Searchbar'

export default function Accueil() {
  return (
    <div className='accuei-container'>
      <img className='accueil--img' src="../../../public/images/Capture.PNG" alt="" />
      <div className='search'>
        <div className='accueil-text'>
        </div>
          <Searchbar />
      </div>
    </div>
  )
}
