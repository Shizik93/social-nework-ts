import m from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {TypePost} from "../../../redux/store";
import React, {ChangeEvent} from "react";


type PropsMyProfileType = {
    post: Array<TypePost>
    addPost:()=>void
    onChangeTextArea:(e:ChangeEvent<HTMLTextAreaElement>)=>void,
    textarea: string
}

export function MyPosts(props: PropsMyProfileType) {
    const onChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeTextArea(e)

    }

    const addPost = () => {
        props.addPost()
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