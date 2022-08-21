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
}, [])
// console.log(user.email)

getDocs(usersCollectionRef)
        .then((snapshot) => {
            let userrs = []
            snapshot.docs.forEach((doc) => {
                userrs.push({...doc.data(), id: doc.id})
            })
            console.log(userrs)
        })


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
        <Route path='/' element={<SharedLayout />}>
        <Route index element={<Home />} />
        
        <Route path='login' element={<FormSeConn setUser={setUser}/>} />
        <Route path='signin' element={<FormNewAcc setUser={setUser} user={user} />} />
        <Route path='*' element={<Error />} />
        </Route>
      </Routes>
      <Footer />
      </BrowserRouter>
      {/* <SharedLayout /> */}
    </div>
  )
}

export default App
