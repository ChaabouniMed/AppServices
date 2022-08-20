import React from 'react'
import './Form.css'
import Navbar from '../components/navbar/Navbar'
import { useState, useEffect } from "react"; 
import { auth } from "../firebase-config";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { Link } from 'react-router-dom';
export default function FormNewAccount(props){
    const [FormDataSignIn,setFormDataSignIn] = React.useState({
        nom:"",
        email:"",
        mdp:""
    })

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            props.setUser(currentUser);
        });
    }, [])
    
    const [mdpVisible,setMdpVisible] = React.useState(true)

    console.log(FormDataSignIn)

    function handleChange(event){
        setFormDataSignIn(old => {
            return {
                ...old,
                [event.target.name]: event.target.value
            }
        })
    }
        // -------- DataBase functions 
    const login = async () => {
        try {
        const user = await signInWithEmailAndPassword(
            auth,
            FormDataSignIn.email,
            FormDataSignIn.mdp
        );
        console.log('logged in ');
        
        } catch (error) {
        alert(error.message);
        }
    };

    // --------
    
    return(
        <div className='container2'>
            <div className="form--container">
                <h1 className='title'>Welcome Back to</h1>
                <form action="">
                    <label htmlFor="nom" className='first--input'>Nom d'utilisateur</label>
                    <input 
                        type="text" 
                        name='email'
                        placeholder="Ton nom d'utilisateur"
                        value={FormDataSignIn.email}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="mdp">Mot de passe</label>
                    <div className="mdp--container">
                        <input 
                            className="mdp"
                            type={mdpVisible ? "password" : "text"}
                            name="mdp"
                            placeholder="Ton mot de passe"
                            value={FormDataSignIn.mdp}
                            onChange={handleChange}
                            required
                        />
                        <img 
                        className='oeil' 
                        src="../../../public/images/oeil.png" 
                        onClick={() => setMdpVisible(!mdpVisible)}
                        />
                    </div>
                    <p>Vous n'avez pas un compte ? <Link to="/signin" style={{color:"#563E5B"}}>Créer maintenant</Link></p> 
                    <button type="button" onClick={login}>s'identifier</button>
                </form>
            </div>
        </div>
    )
}