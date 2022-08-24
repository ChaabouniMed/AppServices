import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useEffect} from 'react'
import {
collection,
getDocs,
addDoc,
updateDoc,
deleteDoc,
doc,
setDoc
} from "firebase/firestore";
import { db } from "../firebase-config";
export default function Profile(props) {

    const navigate= useNavigate()
    console.log('hello')
    useEffect(() => {
        if (!props.user) {
            navigate("/login");            
        }
        else
        {
            console.log("vous etes connecté")
        }
        }, [props.user]);

    const [formData,setFormData] = React.useState({
        numero:"",
        facebook:"",
        ville:""
        })
        function handleChange(event){
        setFormData(old => {
            return {
            ...old,
            [event.target.name]: event.target.value
            }
            })
        }

        const handleSubmit = async () => {
                const docRef = doc(db, "users", props.user.email );
                setDoc(docRef, formData , {merge :true}).then(() => {
                    console.log("Document has been added successfully")
                })
            }

return (
    <div>
        <div className='container1' style={{height:"100vh"}}>
            <div className="form--container">
                <h1 className='title'>Profile</h1>
                    <form action="">
                        <label htmlFor="nom" className='first--input'>Numero de telephone</label>
                        <input 
                            type="text" 
                            name='numero'
                            placeholder="Numero de telephone"
                            value={formData.numero}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="nom" >Lien facebook</label>
                        <input 
                            type="text" 
                            name='facebook'
                            placeholder="facebook.com/profile/..."
                            value={formData.facebook}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="nom">Ville</label>
                        <input 
                            type="text" 
                            name='ville'
                            placeholder="Tunis , Sfax , Sousse ..."
                            value={formData.ville}
                            onChange={handleChange}
                            required
                        />

                        <button onClick={handleSubmit} type="button" >Valider</button>
                    </form>
            </div>
        </div>
    </div>
)
}