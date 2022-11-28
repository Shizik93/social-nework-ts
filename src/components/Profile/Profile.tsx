import React, {useEffect} from "react";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {useParams} from "react-router-dom";
import {getUserProfileStatusTC, getUserProfileTC} from "../../redux/profile-reducer";
import {useAppDispatch} from "../../redux/hooks/hooks";
import {MyPosts} from "./MyPosts/MyPosts";

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
            <MyPosts/>
        </div>)
}

