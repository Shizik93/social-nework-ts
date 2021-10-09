import React from "react";

import m from './Post.module.css'
import {TypePost} from "../../../../redux/state";




export function Post(props:TypePost) {
    return (
        <div className={m.post}>
            <img src='https://www.meme-arsenal.com/memes/0f8248f0809b1231a56fa7a18c24796f.jpg'/>
            <div>{props.message}</div>
            <div>
                <span>like </span>
                {props.like}

            </div>


        </div>

    )
}