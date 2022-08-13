import React from 'react'
import './Form.css'
import { useState, useEffect } from "react"; 
import { auth } from "../firebase-config";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { db } from "../firebase-config";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";
export default function FormNewAcc(){
    const [formData,setFormData] = React.useState({
        utilisateur:"",
        nom:"",
        prénom:"",
        email:"",
        mdp:""
            })
    //-------------------- DataBase functions
    const [user, setUser] = useState({});

    useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
}, [])

const usersCollectionRef = collection(db, "users");
    const register = async () => {
    try {
        const user = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.mdp
        );

        addDoc(usersCollectionRef, { nom: formData.nom, prenom: formData.prénom, email : formData.email })
    } catch (error) {
        console.log(error.message);
    }
    };

    // const login = async () => {
    //   try {
    //     const user = await signInWithEmailAndPassword(
    //       auth,
    //       loginEmail,
    //       loginPassword
    //     );
    //     console.log(user);
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    // };

    const logout = async () => {
    await signOut(auth);
    };
    

    const [MdpVisible,setMdpVisible] = React.useState(true)


    function handleChange(event){
        setFormData(old => {
            return {
                ...old,
                [event.target.name]: event.target.value
            }
        })
    }
    return(
        <div>
            <div className='container1'>
                <div className="form--container">
                    <h1 className='title'>Inscription</h1>
                        <form action="">
                        {/* <label htmlFor="nom" className='nomUtili'>Nom d'utilisateur</label>
                        <input 
                            type="text" 
                            name='utilisateur'
                            placeholder="Ton nom d'utilisateur"
                            value={formData.utilisateur}
                            onChange={handleChange}
                            required
                        /> */}
                        <label htmlFor="nom">Nom</label>
                        <input 
                            type="text" 
                            name='nom'
                            placeholder="Ton nom"
                            value={formData.nom}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="nom">Préom</label>
                        <input 
                            type="text" 
                            name='prénom'
                            placeholder="Ton prénom"
                            value={formData.prénom}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="email">E-mail adresse</label>
                        <input 
                            type="email" 
                            name='email'
                            placeholder="Ton e-mail adresse"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="mdp">Mot de passe</label>
                        <div className="mdp--container">
                            <input 
                                className="mdp"
                                type={MdpVisible ? "password" : "text"}
                                name="mdp"
                                placeholder="Ton mot de passe"
                                value={formData.mdp}
                                onChange={handleChange}
                                required
                            />
                            <img 
                            className='oeil' 
                            src="../../../public/images/oeil.png" 
                            onClick={() => setMdpVisible(!MdpVisible)}
                            />
                        </div>
                        <button onClick={register} type="button" >S'inscrire</button>
                        </form>
                    <h4> User Logged In: </h4>
    {user? user.email : "Not Logged In"}

    <button onClick={logout}> Sign Out </button>
                </div>
            </div>
        </div>
    )   
}