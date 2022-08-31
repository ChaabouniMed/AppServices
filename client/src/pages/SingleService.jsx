import React from 'react'
import { Link, useParams ,useNavigate } from 'react-router-dom'
import Data from '../components/card/DataBig'
import { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";
import  Post  from './Post' 
import './Post.css'

export default function SingleService(props) {
  const townList = ["--","Sfax" , "Tunis"]
  const [ville,setville]= useState("--")

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
    function handleChange (event)
    {
      setville(event.target.value)

    }

    const posts = postLists.map((post) => { if ((post.service == serviceId) && ((post.ville.toLowerCase()==ville.toLowerCase()) || (ville.toLowerCase()=="--")))
    
      return (
      <div className='post'>
        <Link to={`/profile/${post.useruid}`}>
          <Post  post={post}/>
        </Link>
        {props.user?.email == post.email && 
          <img className='delete--img' src="../../public/images/delete.png" alt=""  onClick={() => {
                deletePost(post.id).then(navigate('/services/'+serviceId));
              }}/>}
      </div>
      )
    })

  return (
    <div className='post-big-container'>

    <Link to='/creerpost'>
      <button>Créer post</button>
        {/* <img src={currentService.src} alt="" /> */}
    </Link>
    <div className='siglePageSearch'>
      <img className='singleImg' src="../../public/images/search.png" alt="" />
      <select style={{cursor:"pointer"}}
          className='select'
          value={ville}
          onChange={handleChange}
          name="ville"
          required
      >
            console.log(currentUser)

      {townList.map((town) => {
          return <option value={town}>{town} </option>
          })}
      </select>
    </div>
        <div className="post-list containerAll">
          {posts}
        </div>
    </div>
  )
}
