import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {TypePost} from "../../redux/store";


type PropsType={
    post:Array<TypePost>
    dispatch:(action:any)=>void
    textarea:string
}

export function Profile (props:PropsType) {



    return (
        <div>
            <ProfileInfo/>
            <MyPosts textarea={props.textarea}post={props.post} dispatch={props.dispatch} />
        </div>)
}