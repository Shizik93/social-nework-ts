import m from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {AddPostAC, ChangeTextAC, TypePost, TypeProfilePage} from "../../../redux/state";
import React, {RefObject} from "react";

type PropsMyProfileType = {
    post: Array<TypePost>
    dispatch: (action: any) => void
    textarea: string
}

export function MyPosts(props: PropsMyProfileType) {
    const onChangeTextArea = (e: any) => {
        props.dispatch(ChangeTextAC(e.currentTarget.value))

    }

    const addPost = () => {
        props.dispatch(AddPostAC)


    }


    const postsElement =
        props.post.map(p => <Post message={p.message} like={p.like}/>)
    return (
        <div className={m.myPosts}>
            <h3>My Posts</h3>
            <div>
                <div><textarea value={props.textarea} onChange={onChangeTextArea}/></div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
            <div className={m.posts}>
                {postsElement}

            </div>
        </div>

    )
}