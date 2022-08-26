import React from 'react'
import { Link, useParams ,useNavigate } from 'react-router-dom'
import Data from '../components/card/DataBig'
import { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";
import  Post  from './Post' 
import './Post.css'

export default function SingleService({serviceName,setServiceName}) {

  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  const navigate = useNavigate()

    const {serviceId} = useParams()
    console.log(serviceId)
    useEffect(() => {setServiceName({serviceId})},[serviceId])
    let currentService = {}
    Data.forEach((service) => {
        if(service.name == serviceId) currentService = service
    })

    useEffect(() => {
      const getPosts = async () => {
        const data = await getDocs(postsCollectionRef);
        setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
  
      getPosts();
    }, []);
  return (
    <div className='post-big-container'>

      <button onClick={()=>navigate('/creerpost')}>Créer post</button>
        {/* <img src={currentService.src} alt="" /> */}
        <div className="post-list containerAll">
          {postLists.map((post) => { if (post.service == serviceId)
            return <Post title={post.service} text={post.description} owner={post.prix} photo={post.photo?post.photo : 'https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg'}  />
          })}
        </div>
    </div>
  )
}
