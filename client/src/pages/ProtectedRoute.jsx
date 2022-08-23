import React from 'react'
import {Navigate} from 'react-router-dom'

export default function ProtectedRoute({children,currentUser}) {
    setTimeout(function (){
        if (!currentUser){
            return ( 
            // <Navigate to='/' />
            <h1>Hello world</h1>
            )
            }
            return children;
    },3000)
    

}
