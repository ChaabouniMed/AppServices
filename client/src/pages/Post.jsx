import React from 'react'
import { useState , useEffect } from 'react';
import './Post.css'
import { getStorage, ref, getDownloadURL } from "firebase/storage";
export default function Post(props)
{
    const [link , setlink] = useState("https://bootdey.com/img/Content/avatar/avatar1.png")
    useEffect(()=>{
    const storage = getStorage();
    const starsRef = ref(storage, props.post.useruid +'.png');
    getDownloadURL(starsRef).then((url) => {setlink(url)}).catch((error)=>console.log("Pas d'image"))
},[])

    return (
    // <div className='post-container'>
    //     <img src={props.photo} alt="image" />
    //     <div className='info-container'>
    //         <p className='post-title'>{props.title}</p>
    //         <p className='post-text'>{props.text}</p>
    //         <p className='post-owner'>{props.owner}</p>
    //     </div>
    // </div>
    <div>
    {/* <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" /> */}

    <div className="container" style={{color:'black',cursor:'default'}}>
        <div className="col-12 col-sm-6 col-lg-3">
            <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" style={{visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp"}}>
                <div className="advisor_thumb">
                    <img src={link} height="70px" alt="" />
                    {/* <div className="social-info">
                        <a href="#">
                        <i className="fa fa-facebook"></i></a><a href="#">
                        <i className="fa fa-twitter"></i></a><a href="#">
                        <i className="fa fa-linkedin"></i>
                        </a>
                    </div> */}
                </div>
                <div className="single_advisor_details_info">
                <h3>{props.post.service}</h3>
                <p className="designation">{props.post.description}</p>
                <p>{props.post.prix}</p>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}