import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {TypePost} from "../../redux/state";


type PropsType={
    post:Array<TypePost>
    addPost:()=>void
    onChangeTextArea:(value:string)=>void
    textarea:string
}

export function Profile (props:PropsType) {



    return (
        <div>
            <ProfileInfo/>
            <MyPosts textarea={props.textarea}post={props.post} addPost={props.addPost} onChangeTextArea={props.onChangeTextArea} />
        </div>)
}