import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {TypeProfilePage} from "../../redux/state";




export function Profile (props:TypeProfilePage) {



    return (
        <div>
            <ProfileInfo/>
            <MyPosts post={props.post}   />
        </div>)
}