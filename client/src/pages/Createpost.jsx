import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useEffect , useState} from 'react'
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
import DataBig from '../components/card/DataBig'

export default function Createpost(props) {

    const navigate= useNavigate()
    useEffect(() => {
        if (!props.user) {
            navigate("/login");            
        }
        
    }
    ,[props.user]);
    const [buttonstatus, setbuttonstatus] = useState(true)
    const [formData,setFormData] = React.useState({
        prix:"",
        description:"",
        service: props.serviceName.serviceId,
        email: props.user ? props.user.email : "" ,
        useruid : props.user? props.user.uid :""
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
                const docRef = collection(db, "posts");
                addDoc(docRef, formData).then(() => {
                    console.log("Document has been added successfully")
                    navigate("/");
                })
            }

return (
    <div>
        <div className='container1' style={{height:"100vh"}}>
            <div className="form--container">
                <h1 className='title'>Créer un post</h1>
                    <form action="">
                        <label className='first--input'>Service</label>
                        <select 
                            className='select'
                            value={formData.service}
                            onChange={handleChange}
                            name="service"
                        >
                        {DataBig.map((service) => {
                            return <option value={service.name}>{service.name} </option>
                            })}
                        </select>
                        <label htmlFor="nom" >Description</label>
                        <input 
                            type="text" 
                            name='description'
                            placeholder="Détails , compétences et disponibilité.."
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="nom" >Prix du services</label>
                        <input 
                            type="text" 
                            name='prix'
                            placeholder="00/hr"
                            value={formData.prix}
                            onChange={handleChange}
                            required
                        />
                        <button onClick={handleSubmit} disabled={!buttonstatus} type="button" >Valider</button>
                    </form>
            </div>
        </div>
    </div>
)
}