import React from 'react'
import './UsersAdmin.css'
import {db} from '../firebase-config'
import { getDocs, collection ,deleteDoc , doc} from "firebase/firestore";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function UsersAdmin() {
    const usersCollectionRef = collection(db, "users");
    const [usersList, setUsersList] = useState([]);
    const deleteUser = async (id) => {
        const postDoc = doc(db, "users", id);
        await deleteDoc(postDoc);
        window.location.reload();
      };
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsersList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
    }, []);
    const tableBody = usersList.map((user) => { 
        return(
            <tr key={user.email}>
                <td><Link to={`/profile/${user.id}`}><p>{user.utilisateur}</p></Link></td>
                <td><p>{user.ville}</p></td>
                <td><p>{user.email}</p></td>
                <td><p>Services</p></td>
                <td><img className='delete-img' src="../../public/images/delete.png" alt="" onClick={() => {deleteUser(user.id)}} /></td>
            </tr> 
        )})

return (
    <div className='usersAdminContainerAll'>
        <table>
            <caption><h1>Users Liste</h1></caption>
            <thead>
                <tr>
                    <td><div className='tdVal'><p>Username</p></div></td>
                    <td><div className='tdVal'><p>Ville</p></div></td>
                    <td><div className='tdVal'><p>Email</p></div></td>
                    <td><div className='tdVal'><p>Services</p></div></td>
                    <td><div className='tdVal'><p>Action</p></div></td>
                </tr>
            </thead>
            <tbody>
                {tableBody}
            </tbody>
        </table>

    </div>
)
}
