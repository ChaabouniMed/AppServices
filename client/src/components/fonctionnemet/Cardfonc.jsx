import React from "react"
import './fonctionnement.css'
import Data from './Data'

export default function Cardfonc(props){

    return(
        <div>
            <div className="cardFonc--container">
                <img src={props.src} />
                <div className="text--container">
                    <h4>{props.title}</h4>
                    <p>{props.description}</p>
                </div>
                <div className="numero"><h2>{props.id}</h2></div>
            </div>
        </div>
    )
}