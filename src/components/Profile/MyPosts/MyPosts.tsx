import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import { AddPostAC } from '../../../redux/profile-reducer';

import AddNewPostForm from './addNewPostForm';
import m from './MyPosts.module.css';
import { Post } from './Post/Post';

export const MyPosts = () => {
  const post = useAppSelector(state => state.profileReducer.post);
  const dispatch = useAppDispatch();

  const addPost = (value: { newPost: string }) => {
    dispatch(AddPostAC(value.newPost));
  };

  const postsElement = post.map(p => (
    <Post key={p.id} id={p.id} message={p.message} like={p.like} />
  ));

  return (
    <div className={m.myPosts}>
      <h3>My Posts</h3>
      <AddNewPostForm onSubmit={addPost} />
      <div className={m.posts}>{postsElement}</div>
    </div>
  );
};
