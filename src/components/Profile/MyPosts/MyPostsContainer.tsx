import React from "react";
import {AddPostAC, profileReducerType, TypePost} from '../../../redux/profile-reducer';
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";


type mapStateToPropsType={
    post:Array<TypePost>


}
const mapStateToProps = (state:AppStateType): mapStateToPropsType => {
  return{
      post:state.profileReducer.post,
  }
}
const mapDispatchToProps = (dispatch:(action:profileReducerType)=>void) => {
    return{
        addPost:(value:any) => {
            dispatch(AddPostAC(value))
    },

}
}
export const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts)