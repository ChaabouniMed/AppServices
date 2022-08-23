import React from 'react'
import './Post.css'
export default function Post(props)
{
    return (
    <div className='post-container'>
        <img src={props.photo} alt="image" />
        <p className='post-title'>{props.title}</p>
        <p className='post-text'>{props.text}</p>
        <p className='post-owner'>{props.owner}</p>
    </div>
    )
}