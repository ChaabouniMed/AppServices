import React from "react";
import './fonctionnement.css'
import Data from './Data'
import Cardfonc from './Cardfonc'

export default function Fonctionnement(){
    const fonct = Data.map(item => {
        return(
            <Cardfonc 
            key={item.id}
            src={item.src}
            title={item.title}
            id={item.id}
            description={item.description}
            />
        )
    }
    )
    return(
        <div className="foncAll--container containerAll">
            <h1 className="title title2">Comment fonctionne le site</h1>
            <div className="fonc--container">  
                {fonct}
            </div>
        </div>
    )
}