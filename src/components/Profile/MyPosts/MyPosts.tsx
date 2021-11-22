import m from './MyPosts.module.css'
import {Post} from "./Post/Post";
import React from "react";
import {TypePost} from "../../../redux/profile-reducer";
import AddNewPostForm from "./addNewPostForm";


type PropsMyProfileType = {
    post: Array<TypePost>
    addPost: (value:any) => void
}

export function MyPosts(props: PropsMyProfileType) {


    const addPost = (value:any) => {

        props.addPost(value.newPost)
    }

    const postsElement = props.post.map(p => <Post key={p.id} id={p.id} message={p.message} like={p.like}/>)
    return (
        <div className={m.myPosts}>

            <h3>My Posts</h3>
            <AddNewPostForm onSubmit={addPost}/>
            <div className={m.posts}>
                {postsElement}
            </div>
        </div>

    )
}