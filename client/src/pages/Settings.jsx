import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useEffect,useState} from 'react'
import { storage } from "../firebase-config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
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
export default function Settings(props) {
  const [photo, setPhoto] = useState(null);
    const navigate= useNavigate()
    useEffect(() => {
        if (!props.user) {
          navigate("/login");            
        }
      }, [props.user]);

      const [formData,setFormData] = React.useState({
        numero:"",
        facebook:"",
        ville:"",
        age:""
        })
        const [file, setFile] = useState();
        function handlePictureChange(event)
        {    
          if (event.target.files[0]) {
            setPhoto(event.target.files[0])
            setFile(URL.createObjectURL(event.target.files[0]));
          }
        }
        function handleChange(event){
          setFormData(old => {
            return {
              ...old,
              [event.target.name]: event.target.value
              }
            })
          }
          const handleSubmit = async (e) => {
            e.preventDefault()
            const docRef = doc(db, "users", props.user.uid );
            setDoc(docRef, formData , {merge :true}).then(() => {
              console.log("Document has been added successfully")
            })            
              const fileRef = ref(storage,props.user.uid+'.png');
              uploadBytes(fileRef, photo).then(snapshot =>{navigate('/')}) 
          }
return (
    <div>
        <div className='container1'>
            <div className="form--container">
                <h1 className='title'>Settings</h1>
                    <form onSubmit={handleSubmit}>
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
                    <label htmlFor="nom">Age</label>
                    <input
                      type='age'
                      name='age'
                      placeholder='Ton age'
                      value={formData.age}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="nom">Photo de profil</label>
                    <input 
                        type="file" 
                        name='photo'
                        onChange={handlePictureChange}
                        required
                    />
                    <img src={file} alt="image" />
                    <button>Valider</button>
                    </form>
            </div>
        </div>
    </div>
)
}