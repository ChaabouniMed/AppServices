import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/navbar/Navbar'
import FormNewAcc from './pages/FormNewAcc'
import FormSeConn from './pages/FormSeConn'
import AllCards from './components/card/AllCards'
import Fonctionnement from './components/fonctionnemet/Fonctionnement'
import Footer from './components/footer/Footer'
import Home from './pages/Home';
import SharedLayout from './pages/SharedLayout';
import Error from './pages/Error';
import Settings from './pages/Settings'
import Createpost from './pages/Createpost' ;
import SingleService from './pages/SingleService'
import Profile from './pages/Profile';
import UsersAdmin from './pages/UsersAdmin';
import PostsAdmin from './pages/PostsAdmin'
import Particle from './components/Particle';
import {useEffect} from 'react' 
import {onAuthStateChanged} from "firebase/auth";
import { auth } from "./firebase-config";
import { db } from "./firebase-config";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    setDoc
} from "firebase/firestore";

function App() {
  const [user, setUser] = useState({});
  const usersCollectionRef = collection(db, "users");
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);

    });
}, [user])
  const [currentUser,setCurrentUser] = useState({})

  useEffect(() => {
    getDocs(usersCollectionRef)
        .then((snapshot) => {
            let userList = []
            let ici = {}
            snapshot.docs.forEach((doc) => {
                userList.push({...doc.data(), id: doc.id})
            })
            if(user != null) 
              userList.forEach((item) => {
              if (item.email == user.email) {
              setCurrentUser(item)
              } 
            })
            else setCurrentUser({})
        })
  },[user])

  const [serviceName,setServiceName] = useState("")

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(usersCollectionRef);
  //     setCurrentUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };

  //   getUsers();
  // }, []);
  
  return (
    <div>
      {/* <Navbar />
      <FormNewAcc />
      <FormSeConn />
      <AllCards />
      <Fonctionnement />
      <Footer /> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout currentUser={currentUser} user={user}/>}>
          <Route index element={<Home currentUser={currentUser} />} />
          {/* <Route path="profile/services/:serviceId" element={<SingleService />} /> */}
          <Route path="services/:serviceId" element={<SingleService serviceName={serviceName} setServiceName={setServiceName} user={user} currentUser={currentUser}/>} />
          <Route path='login' element={<FormSeConn setUser={setUser} user={user}/>} />
          <Route path='signin' element={<FormNewAcc setUser={setUser} user={user} />} />
          <Route path='*' element={<Error currentUser={currentUser} />} />
          <Route path='settings' element={<Settings currentUser={currentUser} user={user} setCurrentUser={setCurrentUser}/>} />
          <Route path='profile/:profileId' element={<Profile user={user} currentUser={currentUser}/>} />
          <Route path='creerpost' element ={<Createpost currentUser={currentUser} user={user} serviceName={serviceName}/>}/>
          <Route path='admin/users' element={<UsersAdmin />} />
          <Route path='admin/posts' element={<PostsAdmin />} />
        </Route>
        
      </Routes>
      <Footer />
      </BrowserRouter>
  
      {/* <Particle /> */}
      {/* <SharedLayout /> */}
    </div>
  )
}

export default App
