import React from "react";
import Card from "./Card";
import DataSmall from './DataSmall'
import DataBig from './DataBig'
import './cards.css'


export default function AllCards(){
    const [more,setMore] = React.useState(true)
    let data = more ? DataSmall : DataBig
    const cards = data.map(item => {
        return(
            <Card
            key={item.id}
            src={item.src}
            name={item.name} 
            />
        )
    })
    return(
        <div className="services--container containerAll">
            <h1 className="title">Services</h1>
            <div className="cards--container">
                {cards}
            </div>
            <button onClick={() => setMore(!more)} className="btn--cards">{more ? "voir plus" : "voir moin"}</button>
        </div>
    )

    
}