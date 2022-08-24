import React from 'react'
import './Post.css'
export default function Post(props)
{
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

    <div className="container">
        <div className="col-12 col-sm-6 col-lg-3">
            <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" style={{visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp"}}>
                <div className="advisor_thumb">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                    {/* <div className="social-info">
                        <a href="#">
                        <i className="fa fa-facebook"></i></a><a href="#">
                        <i className="fa fa-twitter"></i></a><a href="#">
                        <i className="fa fa-linkedin"></i>
                        </a>
                    </div> */}
                </div>
                <div className="single_advisor_details_info">
                <h3>{props.title}</h3>
                <p className="designation">{props.text}</p>
                <p>{props.owner}</p>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}