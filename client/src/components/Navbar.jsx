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
                            <ul className="navbar-dropdown-all-items">
                            <li className="navbar-dropdown-items">Se&nbsp;connecter</li>
                            <li className="navbar-dropdown-items">Creer&nbsp;un&nbsp;compte</li>
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
                            <li>
                        <div className="navbar-dropdown">
                            <p className="navbar-dropdown-button" onClick={toggleshowmenu}>Compte</p>
                            <DropDownItems ShowMenu={ShowMenu} />
                        </div>
                        </li>
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