import React from 'react'
import './UsersAdmin.css'
import {db} from '../firebase-config'
import { getDocs,setDoc, collection,doc,deleteDoc } from "firebase/firestore";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PostsAdmin() {
    const postsCollectionRef = collection(db, "posts");
    const [postsList, setPostsList] = useState([]);
    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
        window.location.reload();
      };
    const confirmPost = async(id)=> 
    {
        const postDoc = doc(db, "posts", id);
        await setDoc(postDoc , {état : "accepté"},{merge : true});
        window.location.reload();
    }
    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPostsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getPosts();
    }, []);
    const tableBody = postsList.map((post) => { 
        return(
            <tr key={post.email}>
                <td className='tdPosts'><Link to={`/profile/${post.useruid}`}><p>{post.utilisateur}</p></Link></td>
                <td className='tdPosts'><p>{post.email}</p></td>
                <td className='tdPosts'><p>{post.service}</p></td>
                <td className='tdPosts'><p>{post.description}</p></td>
                <td className='tdPosts'><p>{post.état}</p></td>
                <td className='tdPosts'>
                    {post.état == "En attente" ? 
                    <div>
                        <img className='confirm-img' src="../../public/images/confirm.png" alt="" onClick={()=>{confirmPost(post.id)}}/>
                        <img className='refuser-img' src="../../public/images/refuser.png" alt="" onClick={() => {deletePost(post.id)}} />
                    </div> : 
                    <img className='delete-img' src="../../public/images/delete.png" alt="" onClick={() => {deletePost(post.id)}}/>
                    }
                </td>
            </tr> 
        )})

return (
    <div className='usersAdminContainerAll'>
        <table>
            <caption><h1>Posts Liste</h1></caption>
            <thead>
                <tr>
                    <td className='tdPosts'><div className='tdVal'><p>Username</p></div></td>
                    <td className='tdPosts'><div className='tdVal'><p>Email</p></div></td>
                    <td className='tdPosts'><div className='tdVal'><p>Service</p></div></td>
                    <td className='tdPosts'><div className='tdVal'><p>Description</p></div></td>
                    <td className='tdPosts'><div className='tdVal'><p>Etat</p></div></td>
                    <td className='tdPosts'><div className='tdVal'><p>Action</p></div></td>
                </tr>
            </thead>
            <tbody>
                {tableBody}
            </tbody>
        </table>

    </div>
)
}
