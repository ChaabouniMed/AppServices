import React from "react";
import './Navbar.css'
import { Link } from 'react-router-dom';
import {signOut} from "firebase/auth";
import { auth } from "../../firebase-config";
import { useNavigate } from 'react-router-dom';

export default function NavbarProfile({currentUser})
            {
                const [droping,setDroping] = React.useState(true)
                const navigate = useNavigate()
                const logout = async () => {
                    await signOut(auth);
                    navigate('/')
                    };
                return (
                    <div className="nav--container">
                        <div className="nav">
                            <Link to="/">
                            <h3 className="nav-logo">WebsiteName</h3>
                            </Link>
                            <ul className="navbar-links">
                                <li className="navbar-item-profile"><a href="#top" >Acceuil</a></li>
                                <li className="navbar-item-profile"><div></div> Recherche</li>    
                                <li className="navbar-item-profile"><a href="#services">Services</a></li>
                                <li className="navbar-item-profile"><a href="#footer" >À propos</a></li>
                                {/* <Link to="/login">
                                <li className="navbar-item-profile">Se connecter</li>
                                </Link> */}
                                {/* {console.log(currentUser)} */}
                                {/* <li className="btn-holded-profile" onClick={() => setDroping(!droping)}>{currentUser.utilisateur}</li> */}
                                {JSON.stringify(currentUser) == JSON.stringify({}) ? <li></li> : <li className="btn-holded-profile" onClick={() => setDroping(!droping)}>
                                    <div className="user--btn">
                                        <img className="user-img" src="../../../public/images/user.png"/>
                                        <span className="user--name">{currentUser.utilisateur}</span>
                                        <img className="arrow--down" src="../../../public/images/arrow-down.png" alt="" />
                                    </div>
                                    </li>}
                            </ul>
                        </div>
                        <ul className={droping ? "dropdown--none" : "dropdown"}>
                            <Link to="/profile">
                                <li onClick={() => setDroping(true)}>Profile</li>
                            </Link>
                                <li style={{cursor :"pointer"}}
                                onClick={
                                // setDroping(true)
                                logout}>
                                Se déconnecter
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