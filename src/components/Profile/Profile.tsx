import React, {useEffect} from "react";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {useParams} from "react-router-dom";
import {getUserProfileStatusTC, getUserProfileTC} from "../../redux/profile-reducer";
import {useAppDispatch} from "../../redux/hooks/hooks";

export const Profile = () => {
    const {userId} = useParams<string>()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (userId) {
            dispatch(getUserProfileTC(userId))
            dispatch(getUserProfileStatusTC(userId))
        }
    }, [])
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>)
}

