import React from 'react'
import './Form.css'
import Navbar from '../Navbar'

export default function FormNewAcc(){
    const [formData,setFormData] = React.useState({
        utilisateur:"",
        nom:"",
        prénom:"",
        email:"",
        mdp:""
    })

    const [MdpVisible,setMdpVisible] = React.useState(true)

    console.log(formData)

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
            <Navbar />
            <div className='container1'>
                <div className="form--container">
                    <h1 className='title'>Inscription</h1>
                    <form action="">
                        <label htmlFor="nom" className='nomUtili'>Nom d'utilisateur</label>
                        <input 
                            type="text" 
                            name='utilisateur'
                            placeholder="Ton nom d'utilisateur"
                            value={formData.utilisateur}
                            onChange={handleChange}
                            required
                        />
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
                        <button>S'inscrire</button>
                    </form>
                </div>
            </div>
        </div>
    )   
}