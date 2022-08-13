import React from "react";
import './Navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar()
            {
                return (
                    <div className="nav">
                        <h3 className="nav-logo">WebsiteName</h3>
                        <ul className="navbar-links">
                            <li className="navbar-item"><a href="#top" >Acceuil</a></li>
                            <li className="navbar-item">Recherche</li>    
                            <li className="navbar-item"><a href="#services">Services</a></li>
                            <li className="navbar-item"><a href="#footer" >À propos</a></li>
                            <Link to="/login">
                            <li className="navbar-item">Se connecter</li>
                            </Link>
                        </ul>
                    </div>
                    )
            }
            function Search()
            {
                return(
                    <div className="search-area">
                        <div>
                        <p className="search-title">Chercher des catégories ou des profils </p>
                        <form >
                            
                            <input className="search-input" type="text"/>
                        </form>
                        </div>
                    </div>
                )
            }