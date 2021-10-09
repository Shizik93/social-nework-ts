import m from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {TypeProfilePage} from "../../../redux/state";
import React, {RefObject} from "react";



export function MyPosts(props:TypeProfilePage) {
    let newPostElement: any=React.createRef()
const addPost = () => {
        let text=newPostElement.current.value
  alert(text)
}


    const postsElement=
        props.post.map(p=> <Post message={p.message} like={p.like}/>)
    return (
        <div className={m.myPosts}>
            <h3>My Posts</h3>
            <div>
                <div><textarea ref={newPostElement} ></textarea></div>
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