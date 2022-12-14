import React from "react";
import Card from "./Card";
import DataSmall from './DataSmall'
import DataBig from './DataBig'
import './cards.css'
import { Link } from "react-router-dom";


export default function AllCards(){
    const [more,setMore] = React.useState(true)
    let data = more ? DataSmall : DataBig
    const cards = data.map(item => {
        return(
            <Link key={item.id} to={`services/${item.name}`}>
                <Card
                key={item.id}
                src={item.src}
                name={item.name} 
                />
            </Link>
        )
    })
    return(
        <div className="services--container containerAll" id="services">
            <h1 className="title">Tous les services</h1>
            <div className="cards--container">
                {cards}
            </div>
            <button onClick={() => setMore(!more)} className="btn--cards">{more ? "voir plus" : "voir moin"}</button>
        </div>
    )

}