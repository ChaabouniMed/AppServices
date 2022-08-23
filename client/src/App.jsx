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
import Profile from './pages/Profile'
import ProtectedRoute from './pages/ProtectedRoute';
import SingleService from './pages/SingleService'
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
  // console.log(user)
  const usersCollectionRef = collection(db, "users");
  let currentUtili
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser)
        setUser(currentUser);

    });
}, [user])
// console.log(user.email)
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

        console.log(currentUser)
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
        <Route path='/' element={<SharedLayout currentUser={currentUser}/>}>
        <Route index element={<Home currentUser={currentUser} />} />
        <Route path="profile/services/:serviceId" element={<SingleService />} />
        <Route path="services/:serviceId" element={<SingleService />} />
        <Route path='login' element={<FormSeConn setUser={setUser}/>} />
        <Route path='signin' element={<FormNewAcc setUser={setUser} user={user} />} />
        <Route path='*' element={<Error currentUser={currentUser} />} />
        </Route>
        <Route path='profile' element={
        // <ProtectedRoute currentUser={currentUser}>
          <Profile currentUser={currentUser}/>
        // </ProtectedRoute>
        } />
      </Routes>
      <Footer />
      </BrowserRouter>
      {/* <SharedLayout /> */}
    </div>
  )
}

export default App
