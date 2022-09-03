import React from 'react'
import './Form.css'
import FormSeConn from './FormSeConn'
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
    setDoc
} from "firebase/firestore";
import { Link, useNavigate } from 'react-router-dom';

export default function FormNewAcc(props){
    const [buttonstatus, setbuttonstatus] = useState(true)
    const [formData,setFormData] = React.useState({
        utilisateur:"",
        nom:"",
        prénom:"",
        email:"",
        mdp:"",
        verified:false,
        user: "user",
            })
    //-------------------- DataBase functions

    const navigate= useNavigate()
    // useEffect(() => {
    //     if (props.user) {
    //         navigate("/");            
    //     }
    // }
    // ,[props.user]);


const usersCollectionRef = collection(db, "users");

    const register = async (e) => {
        e.preventDefault()
        setbuttonstatus(false)
    try {

        const user = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.mdp
        )
        const docRef = doc(db, "users", auth.currentUser.uid ); //formData.email
        setDoc(docRef, formData, ).then(() => {
            console.log("Document has been added successfully")
            navigate('/')
        })
        .catch(error => {
            console.log(error);
})  
        
    } catch (error) {
        if(error.message == "Firebase: Error (auth/email-already-in-use).")
        alert("Email déjà utilisé !");
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
    navigate('/')
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
        <div className='container1'>
            <div className="form--container">
                <h1 className='title'>Inscription</h1>
                    <form onSubmit={register}>
                    <label htmlFor="nom" className='first--input'>Nom d'utilisateur</label>
                    <input 
                        type="text" 
                        name='utilisateur'
                        placeholder="Ton nom d'utilisateur"
                        value={formData.utilisateur}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="nom" >Nom</label>
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
                    <p style={{fontSize:"15px"}}>Vous avez déjà un compte ? <Link to="/login" style={{color:"#563E5B",borderBottom:"1px solid #563E5B"}}>connecter maintenant</Link></p> 
                    <button disabled={!buttonstatus} >S'inscrire</button>
                    </form>
            </div>
        </div>
    )   
}