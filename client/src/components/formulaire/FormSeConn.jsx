import React from 'react'
import './Form.css'
import Navbar from '../Navbar'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";
export default function FormNewAccount(){
    const [FormDataSignIn,setFormDataSignIn] = React.useState({
        nom:"",
        email:"",
        mdp:""
    })

    const [mdpVisible,setMdpVisible] = React.useState(true)

    console.log(FormDataSignIn)

    function handleChange(event){
        setFormDataSignIn(old => {
            return {
                ...old,
                [event.target.name]: event.target.value
            }
        })
    // -------- DataBase functions 
    const login = async () => {
        try {
          const user = await signInWithEmailAndPassword(
            auth,
            FormDataSignIn.email,
            FormDataSignIn.mdp
          );
          console.log(user);
        } catch (error) {
          console.log(error.message);
        }
      };

    // --------
    }
    return(
        <div>
            <Navbar />
            <div className='container2'>
                <div className="form--container">
                    <h1 className='title'>Welcome Back to</h1>
                    <form action="">
                        <label htmlFor="nom" className='nomUtili'>Nom d'utilisateur</label>
                        <input 
                            type="text" 
                            name='nom'
                            placeholder="Ton nom d'utilisateur"
                            value={FormDataSignIn.nom}
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
                        <button onClick={login}>s'identifier</button>
                    </form>
                </div>
            </div>
        </div>
    )
}