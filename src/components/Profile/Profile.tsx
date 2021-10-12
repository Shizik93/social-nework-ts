import React from "react";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {TypePost} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


type PropsType={
    post:Array<TypePost>
    dispatch:(action:any)=>void
    textarea:string
}

export function Profile (props:PropsType) {



    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer textarea={props.textarea}post={props.post} dispatch={props.dispatch} />
        </div>)
}