
import {TypePost} from "../../../redux/store";
import React, {ChangeEvent} from "react";
import {AddPostAC, ChangeTextAC} from '../../../redux/profile-reducer';
import {MyPosts} from "./MyPosts";

type PropsMyProfileType = {
    post: Array<TypePost>
    dispatch: (action: any) => void
    textarea: string
}

export function MyPostsContainer (props: PropsMyProfileType) {
    const onChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(ChangeTextAC(e.currentTarget.value))

    }
    const addPost = () => {
        props.dispatch(AddPostAC())


    }

    return (

        <MyPosts post={props.post} addPost={addPost} onChangeTextArea={onChangeTextArea} textarea={props.textarea}/>
    )
}