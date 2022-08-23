import React from 'react'
import { Link, useParams ,useNavigate } from 'react-router-dom'
import Data from '../components/card/DataBig'
import { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";
import  Post  from './Post' 
import './Post.css'

export default function SingleService() {

  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  const navigate = useNavigate()

    const {serviceId} = useParams()
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

      <button onClick={()=>navigate('/profile')}>Créer post</button>
        {/* <img src={currentService.src} alt="" /> */}
        <div className="post-list">
          {postLists.map((post) => {
            return <Post title={post.title} text={post.text} owner={post.owner}  />
          })}
        </div>
    </div>
  )
}
