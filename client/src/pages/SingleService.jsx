import React from 'react'
import { Link, useParams ,useNavigate } from 'react-router-dom'
import Data from '../components/card/DataBig'
import { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";
import  Post  from './Post' 
import './Post.css'

export default function SingleService(props) {

  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  const navigate = useNavigate()

    const {serviceId} = useParams()
    useEffect(() => {props.setServiceName({serviceId})},[serviceId])
    let currentService = {}
    Data.forEach((service) => {
        if(service.name == serviceId) currentService = service
    })

    const deletePost = async (id) => {
      const postDoc = doc(db, "posts", id);
      await deleteDoc(postDoc);
    };
    console.log('signlepage')
    useEffect(() => {
      const getPosts = async () => {
        const data = await getDocs(postsCollectionRef);
        setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      getPosts();
    }, []);

    const posts = postLists.map((post) => { if (post.service == serviceId)
      return (
      <div>
        <Link to={`/profile/${post.useruid}`}>
      <Post  post={post} />
      {props.user?.email == post.email && <button
                    onClick={() => {
                      deletePost(post.id).then(navigate('/services/'+serviceId));
                    }}
                  ></button>}
        </Link>
      </div>
      )
    })

  return (
    <div className='post-big-container'>

      <button onClick={()=>navigate('/creerpost')}>Créer post</button>
        {/* <img src={currentService.src} alt="" /> */}
        <div className="post-list containerAll">
          {posts}
        </div>
    </div>
  )
}
