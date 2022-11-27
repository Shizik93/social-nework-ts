import React, {useEffect} from "react";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {useParams} from "react-router-dom";
import {getUserProfileTC} from "../../redux/profile-reducer";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";

export const Profile = () => {
    const { userId } = useParams()
    const dispatch=useAppDispatch()

  useEffect(()=>{
      if(userId)
      dispatch(getUserProfileTC(userId))
  },[])
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer/>
        </div>)
}

