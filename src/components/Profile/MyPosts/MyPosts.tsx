import m from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {TypeProfilePage} from "../../../redux/state";



export function MyPosts(props:TypeProfilePage) {



    const postsElement=
        props.post.map(p=> <Post message={p.message} like={p.like}/>)
    return (
        <div className={m.myPosts}>
            <h3>My Posts</h3>
            <div>
                <div><textarea  ></textarea></div>
                <div>
                    <button>Add post</button>
                </div>

            </div>
            <div className={m.posts}>
                {postsElement}

            </div>
        </div>

    )
}