import React, {ChangeEvent} from "react";
import {AddPostAC, ChangeTextAC, profileReducerType, TypePost} from '../../../redux/profile-reducer';
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

type mapStateToPropsType={
    post:Array<TypePost>
    textarea:string

}
const mapStateToProps = (state:AppStateType): mapStateToPropsType => {
  return{
      post:state.profileReducer.profilePage.post,
      textarea:state.profileReducer.profilePage.textarea
  }
}
const mapDispatchToProps = (dispatch:(action:profileReducerType)=>void) => {
    return{
        addPost:() => {
            dispatch(AddPostAC())
    },
        onChangeTextArea:(e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(ChangeTextAC(e.currentTarget.value))

        }
  
}
}
export const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts)