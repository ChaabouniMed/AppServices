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
      <div className='search-content'>
        <div className='accueil-text'>
        <h1>Nouvelle plateforme des services à la demande en Tunisie</h1>
        <p>Khademni est une plateforme Web Tunisienne de 
          mise en relation directe de la demande local aux 
          travailleurs indépendants permettant aux utilisateurs 
          de trouver aide et assistance immédiates aux fins de 
          leurs projets & tâches quotidiennes.</p>
        </div>
        <div className='searchbar'>
          <Searchbar />
        </div>
      </div>
    </div>
  )
}
