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
import { Link, useNavigate } from 'react-router-dom';
export default function FormNewAccount(props){
    const [FormDataSignIn,setFormDataSignIn] = React.useState({
        email:"",
        mdp:""
    })
    const navigate= useNavigate()
    useEffect(() => {
        if (props.user) {
            navigate("/");            
        }
    }
    ,[props.user]);
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            props.setUser(currentUser);
        });
    }, [])
    
    const [mdpVisible,setMdpVisible] = React.useState(true)


    function handleChange(event){
        setFormDataSignIn(old => {
            return {
                ...old,
                [event.target.name]: event.target.value
            }
        })
    }
        // -------- DataBase functions 
    const login = async (e) => {
        e.preventDefault()
        try {
        const user = await signInWithEmailAndPassword(
            auth,
            FormDataSignIn.email,
            FormDataSignIn.mdp
        );
        console.log('logged in ');
        navigate('/')
        
        } catch (error) {
        alert(error.message);
        }
    };

    // --------
    
    return(
        <div className='container2'>
            <div className="form--container">
                <h1 className='title'>Welcome Back to</h1>
                <form onSubmit={login}>
                    <label htmlFor="email" className='first--input'>E-mail adresse</label>
                    <input 
                        type="email" 
                        name='email'
                        placeholder="Ton e-mail adresse"
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
                    <p style={{fontSize:"15px"}}>Vous n'avez pas un compte ? <Link to="/signin" style={{color:"#563E5B",borderBottom:"1px solid #563E5B"}}>Créer maintenant</Link></p> 
                    <button>s'identifier</button>
                </form>
            </div>
        </div>
    )
}