import React from "react";
import img from '../../../../assets/images/924874.png'
import m from './Post.module.css'
import {TypePost} from "../../../../redux/profile-reducer";

export function Post(props:TypePost) {
    return (
        <div className={m.post}>
            <img src={img}/>
            <div>{props.message}</div>
            <div>
                <span>like </span>
                {props.like}

            </div>


        </div>

    )
}