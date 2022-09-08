import React from 'react'
import './Footer.css'
export default function Footer()
{
    return (
        <footer className="footer">
            <h4 className="footer-logo">Khademni</h4>
            <p>Khademni a été developpé par Mohamed Chaabouni et Mahdi Ayadi en cadre de projet d'été </p>
            {/* <ul>
                <li className="footer-link"><img src="../../../public/images/linkedin.png" className="socialmedia-logo"/>Mohamed Chaabouni</li>
                <li className="footer-link"><img src="../../../public/images/linkedin.png" className="socialmedia-logo"/>Mahdi Ayadi</li>
            </ul> */}
            <div className="footer-bottom" id="footer">
                Copyright © 2022 
            </div>
        </footer>
        )

}