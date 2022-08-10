import React from "react";
import './Navbar.css'

export default function Navbar()
            {
                function DropDownItems(props)
                    {
                        if (props.ShowMenu)
                            return (<p></p>)
                        else
                            return(
                            <ul class="navbar-dropdown-items">
                            <li>Se connecter</li>
                            <li>Creer un compte</li>
                            </ul>)
                    }
                const [ShowMenu,SetShowMenu]=React.useState(true)
                function toggleshowmenu()
                {
                    SetShowMenu((prev)=>!prev)
                }
                return (
                    <div className="nav">
                        <h3 className="nav-logo">WebsiteName</h3>
                        <ul>
                            <li>Acceuil</li>
                            <li>Recherche</li>    
                            <li>Services</li>
                            <li>About us</li>
                        </ul>
                        <div className="navbar-dropdown">
                            <button className="navbar-dropdown-menu" onClick={toggleshowmenu}>Compte</button>
                            <DropDownItems ShowMenu={ShowMenu} />
                        </div>
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