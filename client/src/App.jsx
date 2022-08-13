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

function App() {
  const [user, setUser] = useState(null);
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
        <Route path='signin' element={<FormNewAcc />} />
        <Route path='login' element={<FormSeConn setUser={setUser}/>} />
        <Route path='signin' element={<FormNewAcc />} />
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
