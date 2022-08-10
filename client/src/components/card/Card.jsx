import React from "react";
import './cards.css'


export default function Card(props){

    return(
        <div>
            <div className="card--container">
                <div className="img--container">
                    <img src={props.src} className="image"/>
                </div>
                <h4 className="name">{props.name}</h4>
            </div>
        </div>
    )
}