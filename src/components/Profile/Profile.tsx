import React from "react";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
type ProfileUsersType={

    aboutMe:string,
    contacts: {
        facebook: string|null,
        website: string|null,
        vk: string|null,
        twitter: string|null,
        instagram: string|null,
        youtube: string|null,
        github: string|null,
        mainLink: string|null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string|null,
    fullName: string,
    userId: number,
    photos: {
        small: string|null,
        large: string|null
    }
}
type ProfilePropsType={
    profile:ProfileUsersType|null
    setUserProfile:(profile:ProfileUsersType)=>void
    status:string
    updateStatus:(status:string)=>void
}
export function Profile(props:ProfilePropsType) {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>)
}

